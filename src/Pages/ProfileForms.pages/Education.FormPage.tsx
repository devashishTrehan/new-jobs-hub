import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import InputField from '../../Components/TextField.component/TextField.component';
import '../Profile.page/Profile.page.css';
import './FormPages.css';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import { ValidateFields } from '../../Services/App.service';
import { Loader } from '../../Components/Loader.component/Loader.component';
import { DeleteUserEducation, UpdateEducation } from '../../Services/Api.service';
import { UserContext } from '../../Context/User.context';
import { FilterAttribsContext } from '../../Context/FilterAttribs.context';
import { Autocomplete } from '@material-ui/lab';
import { AppContext } from '../../Context/App.context';
import { ConfirmBox } from '../../Components/ConfirmBox.component';
import { ProfileEducationSection } from '../ProfileSections/Education.section';
import { ProfileContext } from '../../Context/Profile.context';


export const EducationFormPage = (props: any) => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { RequestResponseHandler, userProfileSlug } = useContext(ProfileContext);
    const { openSnackbar } = useContext(AppContext);
    const { cities } = useContext(FilterAttribsContext);
    const { token } = useContext(UserContext);

    const [loading, setLoading]: any = useState(false);

    const [actionType, setActionType] = useState('add');
    const [ModalOpen, setModalOpen] = useState(false);

    const [confirmBoxOpen, setConfirmBoxOpen]: any = useState(false);
    const [deleteId, setDeleteId]: any = useState(null);

    const openConfirmBox = (deleteId: number | null = null) => {
        setDeleteId(deleteId);
        setConfirmBoxOpen(true);
    }

    let date = new Date();
    const initialFormData = {
        id: 0,
        courseName: '',
        city: '',
        instituteName: '',
        studyStatus: false,
        startTime: new Date(),
        endTime: new Date(),
        areaOfStudy: ''
    }
    const [Form, setForm] = useState(initialFormData);

    let inputRefs: any = [];


    const FormFields = {
        Id: 'id',
        CourseName: 'courseName',
        City: 'city',
        InstituteName: 'instituteName',
        StudyStatus: 'studyStatus',
        StartTime: 'startTime',
        EndTime: 'endTime',
        AreaOfStudy: 'areaOfStudy'
    }



    const fieldChangeHandler = (field: string, value: any) => {
        setForm((prev: any) => {
            return {
                ...prev,
                [field]: value
            }
        })
    }

    const DateChangeHandler = (field: string, value: any) => {
        value = moment(value).format('YYYY');

        setForm((prev: any) => {
            return {
                ...prev,
                [field]: value
            }
        })
    }

    const fillFields = (data: any, phase: 'update' | 'initial' = 'initial') => {

        if (phase == 'update') {
            setForm((prev: any) => {
                return {
                    ...prev,
                    id: data.id,
                    courseName: data.course_name,
                    areaOfStudy: data.trade,
                    city: data.city_name,
                    instituteName: data.graduated_from,
                    studyStatus: data.year_of_graduation ? false : true,
                    startTime: new Date(`${data.year_of_start}-01-01T00:00:00`),
                    endTime: data.year_of_graduation ? new Date(`${data.year_of_graduation}-01-01T00:00:00`) : new Date(),
                }
            })
        } else {
            setForm(initialFormData)
        }

    }


    const openModal = (type: string, data: any = null) => {
        setActionType(type);
        if (data) {
            fillFields(data, 'update');
        } else {
            fillFields(initialFormData);
        }
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const submitHandler = async (event: any) => {
        event.preventDefault();

        const { courseName, city, instituteName, studyStatus, areaOfStudy, startTime, endTime } = Form;
        let isError = !courseName || !city || !instituteName || !areaOfStudy || !startTime;
        if (!isError) {

            setLoading(true);
            let response = await UpdateEducation(token?.access, userProfileSlug, {
                area_of_study: areaOfStudy,
                course_name: courseName,
                graduated_from: instituteName,
                year_of_start: moment(startTime).format('YYYY'),
                year_of_graduation: moment(endTime).format('YYYY'),
                city_name: city,
                study_status: studyStatus
            }, Form.id);
            // console.log('response of profile update', response);
            setLoading(false);
            RequestResponseHandler(response, 'education');
            if (response?.status) {
                setModalOpen(false);
            }
        } else {
            ValidateFields([!courseName, !areaOfStudy, !instituteName], inputRefs);
            openSnackbar(['Fill requireds fields']);

        }

    }

    const DeleteEducation = async (id: number) => {

        setLoading(true);
        let response = await DeleteUserEducation(token?.access, userProfileSlug, id);

        // console.log('response of profile update', response);

        setLoading(false);
        RequestResponseHandler(response, 'education');

    }


    return (
        <div>

            <ProfileEducationSection isEditable={true} onAdd={() => openModal('add')} onEdit={(data: any) => openModal('update', data)} onDelete={(deleteId: number) => openConfirmBox(deleteId)} />

            <ConfirmBox show={confirmBoxOpen} onClose={() => setConfirmBoxOpen(false)} onConfirm={() => DeleteEducation(deleteId)} />

            <Dialog fullWidth open={ModalOpen} onClose={closeModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{actionType} Education</DialogTitle>
                <DialogContent>

                    <form>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >

                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <InputField
                                        required
                                        ref={(ref: any) => inputRefs[0] = ref}
                                        error={Form.courseName == ''}
                                        errorMessage={'Course name is required'}
                                        value={Form.courseName}
                                        onChange={(event: any) => fieldChangeHandler(FormFields.CourseName, event.target.value)}
                                        autoFocus
                                        color={'primary'}
                                        label="Course Name" />
                                </Grid>
                                <Grid item xs={12} >
                                    <InputField
                                        required
                                        ref={(ref: any) => inputRefs[1] = ref}
                                        error={Form.areaOfStudy == ''}
                                        errorMessage={'Area of study is required'}
                                        value={Form.areaOfStudy}
                                        onChange={(event: any) => fieldChangeHandler(FormFields.AreaOfStudy, event.target.value)}
                                        color={'primary'}
                                        label="Area Of Study" />
                                </Grid>
                                <Grid item xs={12} >
                                    <InputField
                                        required
                                        ref={(ref: any) => inputRefs[2] = ref}
                                        error={Form.instituteName == ''}
                                        errorMessage={'Institute Name is required'}
                                        value={Form.instituteName}
                                        onChange={(event: any) => fieldChangeHandler(FormFields.InstituteName, event.target.value)}
                                        color={'primary'}
                                        label="Institute Name" />
                                </Grid>
                                <Grid item xs={12} >
                                    <Autocomplete
                                        id="city-autocomplete"
                                        value={Form.city}
                                        onChange={(event: any, newCity: string | null) => fieldChangeHandler(FormFields.City, newCity)}
                                        options={cities}

                                        renderInput={(params: any) => <TextField
                                            {...params}
                                            required
                                            margin="dense"
                                            label="City"
                                            fullWidth
                                        />}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={Form.studyStatus}
                                                onChange={(event: any) => fieldChangeHandler(FormFields.StudyStatus, event.target.checked)}
                                                name="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Currently Studying"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <DatePicker
                                        required
                                        openTo="year"
                                        views={["year"]}
                                        label="Year of Admission"
                                        value={Form.startTime}
                                        onChange={(date: any) => fieldChangeHandler(FormFields.StartTime, date)}
                                    />
                                </Grid>
                                {
                                    !Form.studyStatus &&
                                    (< Grid item xs={12} sm={6} >
                                        <DatePicker
                                            required={!Form.studyStatus}
                                            openTo="year"
                                            views={["year"]}
                                            label="Year of Completion"
                                            value={Form.endTime}
                                            onChange={(date: any) => fieldChangeHandler(FormFields.EndTime, date)}
                                        />
                                    </Grid>
                                    )

                                }
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} color="default">Cancel</Button>
                    <Button onClick={submitHandler} color="primary">Save</Button>
                </DialogActions>
                {
                    loading && (<Loader />)
                }
            </Dialog>
        </div >
    )
}