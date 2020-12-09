import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, IconButton, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import InputField from '../../Components/TextField.component/TextField.component';
import '../Profile.page/Profile.page.css';
import './FormPages.css';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import { ValidateFields } from '../../Services/App.service';
import { Loader } from '../../Components/Loader.component/Loader.component';
import { UserContext } from '../../Context/User.context';
import { DeleteUserEmployment, UpdateExperience } from '../../Services/Api.service';
import { Autocomplete } from '@material-ui/lab';
import { FilterAttribsContext } from '../../Context/FilterAttribs.context';
import InputArea from '../../Components/TextArea.component/TextArea.component';
import { AppContext } from '../../Context/App.context';
import { ConfirmBox } from '../../Components/ConfirmBox.component';
import { ProfileEmploymentSection } from '../ProfileSections/Employment.section';
import { ProfileContext } from '../../Context/Profile.context';


export const EmploymentFormPage = (props: any) => {

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

    const initialFormData = {
        id: 0,
        jobTitle: '',
        city: '',
        companyName: '',
        workingStatus: false,
        startTime: new Date(),
        endTime: new Date(),
        description: ''
    };
    const [Form, setForm] = useState(initialFormData);

    let inputRefs: any = [];


    const FormFields = {
        Id: 'id',
        JobTitle: 'jobTitle',
        City: 'city',
        CompanyName: 'companyName',
        WorkingStatus: 'workingStatus',
        StartTime: 'startTime',
        EndTime: 'endTime',
        Description: 'description'
    }

    const fillFields = (data: any, phase: 'update' | 'initial' = 'initial') => {

        if (phase == 'update') {
            setForm((prev: any) => {
                return {
                    ...prev,
                    id: data.id,
                    jobTitle: data.job_role_name,
                    city: data.experience_city_name,
                    companyName: data.company_name,
                    workingStatus: data.ending_year ? false : true,
                    description: data.job_description,
                    startTime: new Date(`${data.started_in_year}-${(data.started_in_month)}-01T00:00:00`),
                    endTime: data.ending_month ? new Date(`${data.ending_year}-${data.ending_month}-01-01T00:00:00`) : new Date(),

                }
            })
        } else {
            setForm(initialFormData)
        }

    }


    const fieldChangeHandler = (field: string, value: any) => {
        setForm((prev: any) => {
            return {
                ...prev,
                [field]: value
            }
        })
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
        const { jobTitle, city, companyName, workingStatus, startTime, endTime, description } = Form;

        let isError = !jobTitle || !city || !companyName || !startTime || !description;
        if (!isError) {

            let response = await UpdateExperience(token?.access, userProfileSlug, {
                job_role_name: jobTitle,
                company_name: companyName,
                experience_city_name: city,
                started: moment(startTime).format('MM-YYYY'),
                ended: moment(endTime).format('MM-YYYY'),
                job_description: description,
                status: workingStatus
            }, Form.id);
            // console.log('response of profile update', response);
            setLoading(false);

            RequestResponseHandler(response, 'experience');
            if (response?.status) {
                setModalOpen(false);
            }
        } else {
            ValidateFields([!jobTitle, !companyName, !description], inputRefs);
            openSnackbar(['Fill requireds fields']);
        }
    }


    const DeleteEmployment = async (id: number) => {

        setLoading(true);

        let response = await DeleteUserEmployment(token?.access, userProfileSlug, id);
        // console.log('response of profile update', response);

        setLoading(false);

        RequestResponseHandler(response, 'experience');

    }


    return (
        <div>

            <ProfileEmploymentSection isEditable={true} onAdd={() => openModal('add')} onDelete={(deleteId: number) => openConfirmBox(deleteId)} onEdit={(data: any) => openModal('update', data)} />

            <ConfirmBox show={confirmBoxOpen} onClose={() => setConfirmBoxOpen(false)} onConfirm={() => DeleteEmployment(deleteId)} />

            <Dialog fullWidth open={ModalOpen} onClose={closeModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{actionType} Employment</DialogTitle>
                <DialogContent>

                    <form>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >

                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <InputField
                                        required
                                        ref={(ref: any) => inputRefs[0] = ref}
                                        error={Form.jobTitle == ''}
                                        errorMessage={'Job title is required'}
                                        value={Form.jobTitle}
                                        onChange={(event: any) => fieldChangeHandler(FormFields.JobTitle, event.target.value)}
                                        autoFocus
                                        color={'primary'}
                                        label="Job title" />
                                </Grid>
                                <Grid item xs={12} >
                                    <InputField
                                        required
                                        ref={(ref: any) => inputRefs[1] = ref}
                                        error={Form.companyName == ''}
                                        errorMessage={'Company name is required'}
                                        value={Form.companyName}
                                        onChange={(event: any) => fieldChangeHandler(FormFields.CompanyName, event.target.value)}
                                        color={'primary'}
                                        name="Company name"
                                        label="Company name" />
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
                                                checked={Form.workingStatus}
                                                onChange={(event: any) => fieldChangeHandler(FormFields.WorkingStatus, event.target.checked)}
                                                name="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Currently working"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <DatePicker
                                        required
                                        openTo="year"
                                        views={["year", "month"]}
                                        label="Started On"
                                        value={Form.startTime}
                                        onChange={(date: any) => fieldChangeHandler(FormFields.StartTime, date)}
                                    />
                                </Grid>
                                {
                                    !Form.workingStatus &&
                                    (< Grid item xs={12} sm={6} >
                                        <DatePicker
                                            required={!Form.workingStatus}
                                            openTo="year"
                                            views={["year", "month"]}
                                            label="Ended On"
                                            value={Form.endTime}
                                            onChange={(date: any) => fieldChangeHandler(FormFields.EndTime, date)}
                                        />
                                    </Grid>
                                    )

                                }

                                <Grid item xs={12}>
                                    <InputArea
                                        required
                                        ref={(ref: any) => inputRefs[2] = ref}
                                        error={Form.description == ''}
                                        errorMessage={'Job description is required'}
                                        className={'textarea'}
                                        label={'Job Description'}
                                        value={Form.description}
                                        onChange={(event: any) => { fieldChangeHandler(FormFields.Description, event.target.value) }}
                                    />
                                </Grid>

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
