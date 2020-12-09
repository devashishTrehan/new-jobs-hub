import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import InputField from '../../Components/TextField.component/TextField.component';
import '../Profile.page/Profile.page.css';
import './FormPages.css';
import { ProfileContext } from '../../Context/Profile.context';
import { FilterAttribsContext } from '../../Context/FilterAttribs.context';
import { Autocomplete } from '@material-ui/lab';
import { UpdatePersonalInfo } from '../../Services/Api.service';
import { UserContext } from '../../Context/User.context';
import moment from 'moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Loader } from '../../Components/Loader.component/Loader.component';
import { ValidateFields } from '../../Services/App.service';
import { AppContext } from '../../Context/App.context';
import { ProfilePersonalInfoSection } from '../ProfileSections/PersonalInfo.section';

export const PersonalInfoFormPage = (props: any) => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { profileDetails, RequestResponseHandler, userProfileSlug } = useContext(ProfileContext);
    const { openSnackbar } = useContext(AppContext);
    const { user, token } = useContext(UserContext);
    const { profile_data } = profileDetails;
    const [data, setData]: any = useState({});
    const [loading, setLoading]: any = useState(false);
    const [ModalOpen, setModalOpen] = useState(false);
    const { filterOptions, cities } = useContext(FilterAttribsContext);
    const initialData = {
        name: '',
        location: '',
        primaryNumber: '',
        alternateNumber: '',
        email: '',
        gender: 'null',
        dateOfBirth: new Date(),
        maritalStatus: 'null',
        nationality: ''

    }
    const [Form, setForm] = useState(initialData);

    const formFields = {
        Name: 'name',
        Location: 'location',
        PrimaryNumber: 'primaryNumber',
        AlternateNumber: 'alternateNumber',
        Email: 'email',
        Gender: 'gender',
        DateOfBirth: 'dateOfBirth',
        MaritalStatus: 'maritalStatus',
        Nationality: 'nationality'

    }

    let inputRefs: any = [];


    useEffect(() => {
        setData(profile_data)
    }, [profile_data])



    const fillFields = () => {
        const { full_name,
            candidate_current_location,
            primary_number,
            alternate_phone,
            email,
            marital_status,
            nationality,
            date_of_birth,
            gender } = data;

        setForm((prev: any) => {
            return {
                ...prev,
                name: full_name,
                location: candidate_current_location,
                primaryNumber: primary_number,
                alternateNumber: alternate_phone,
                email: email,
                gender: gender ? gender : 'null',
                dateOfBirth: date_of_birth ? new Date(`${date_of_birth}T00:00:00`) : new Date(),
                maritalStatus: marital_status ? marital_status : 'null',
                nationality: nationality
            }
        })

    }

    const fieldChangeHandler = (field: string, value: any) => {

        setForm((prev: any) => {
            return {
                ...prev,
                [field]: value
            }
        })
    }

    const openModal = () => {
        fillFields();
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }


    const submitHandler = async (event: any) => {
        event.preventDefault();
        const { email, name, dateOfBirth, primaryNumber, alternateNumber, gender, nationality, location, maritalStatus } = Form;
        let isError = !name || !email || (!primaryNumber || primaryNumber?.length < 10) || !dateOfBirth || !nationality || !location || (alternateNumber && alternateNumber?.length < 10);

        if (!isError) {
            setLoading(true);
            let response = await UpdatePersonalInfo(token?.access, userProfileSlug, {
                email: email,
                user: {
                    full_name: name,
                    date_of_birth: moment(dateOfBirth).format('YYYY-MM-DD'),
                    phone: primaryNumber,
                    gender: gender,
                    nationality: nationality,
                    marital_status: maritalStatus
                },
                city: location,
                alternate_phone: alternateNumber,
            });
            // console.log('response of profile update', response);
            setLoading(false);

            RequestResponseHandler(response, 'profile_data');
            if (response?.status) {
                setModalOpen(false);
            }
        } else {
            ValidateFields([!name, !email, !primaryNumber, !nationality], inputRefs);
            openSnackbar(['Fill requireds fields']);
        }

    }


    const mobileFieldChangeHandler = (field: string, value: any) => {
        if (value.length <= 10) {
            fieldChangeHandler(field, value);
        }
    }


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <div>

                <div className="clearfix"></div>

                <ProfilePersonalInfoSection onEdit={openModal} isEditable={true} />

                <Dialog fullWidth open={ModalOpen} onClose={closeModal} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Personal Information</DialogTitle>
                    <DialogContent>

                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <InputField
                                        ref={(ref: any) => inputRefs[0] = ref}
                                        error={Form.name == ''}
                                        errorMessage={'Name is required'}
                                        value={Form.name}
                                        onChange={(event: any) => { fieldChangeHandler(formFields.Name, event.target.value) }}
                                        autoFocus
                                        margin="dense"
                                        label="Name"
                                        required
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputField
                                        value={Form.email}
                                        onChange={(event: any) => { fieldChangeHandler(formFields.Email, event.target.value) }}
                                        margin="dense"
                                        label="Email Address"
                                        type="email"
                                        ref={(ref: any) => inputRefs[1] = ref}
                                        error={!Form.email ? 'Email is required' : ''}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}  >
                                    <DatePicker
                                        openTo="year"
                                        label="Date of Birth"
                                        views={['year', 'month', 'date']}
                                        required
                                        value={Form.dateOfBirth}
                                        onChange={(date: any) => fieldChangeHandler(formFields.DateOfBirth, date)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputField
                                        value={Form.primaryNumber}
                                        onChange={(event: any) => { mobileFieldChangeHandler(formFields.PrimaryNumber, event.target.value) }}
                                        margin="dense"
                                        required
                                        type='number'
                                        ref={(ref: any) => inputRefs[2] = ref}
                                        error={Form.primaryNumber?.length !== 10}
                                        errorMessage={'Primary Number must be of 10 digits'}
                                        label="Primary Number"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputField
                                        value={Form.alternateNumber}
                                        onChange={(event: any) => { mobileFieldChangeHandler(formFields.AlternateNumber, event.target.value) }}
                                        margin="dense"
                                        type='number'
                                        label="Alternate Number"
                                        error={(Form.alternateNumber && Form.alternateNumber?.length !== 10)}
                                        errorMessage={'Alternate Number must be of 10 digits'}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Select
                                        value={Form.gender}
                                        margin="dense"
                                        label="Gender"
                                        onChange={(event: any) => fieldChangeHandler(formFields.Gender, event.target.value)}
                                        fullWidth
                                    >
                                        <MenuItem value='null'>Gender</MenuItem>
                                        <MenuItem value='Male'>Male</MenuItem>
                                        <MenuItem value='Female'>Female</MenuItem>
                                        <MenuItem value='Other'>Other</MenuItem>
                                        <MenuItem value='Prefer not to answer'>Prefer not to answer</MenuItem>
                                    </Select>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Select
                                        value={Form.maritalStatus}
                                        margin="dense"
                                        label="Gender"
                                        onChange={(event: any) => fieldChangeHandler(formFields.MaritalStatus, event.target.value)}
                                        fullWidth
                                    >
                                        <MenuItem value='null'>Marital Status</MenuItem>
                                        <MenuItem value='Married'>Married</MenuItem>
                                        <MenuItem value='Unmarried'>Unmarried</MenuItem>
                                        <MenuItem value='Prefer not to answer'>Prefer not to answer</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        id="city-autocomplete"
                                        value={Form.location}
                                        onChange={(event: any, newCity: string | null) => fieldChangeHandler(formFields.Location, newCity)}
                                        // onInputChange={(event: any, newCity: string) => fieldChangeHandler(formFields.Location, newCity)}
                                        options={cities}
                                        renderInput={(params: any) => <TextField
                                            {...params}
                                            error={Form.location == ''}
                                            errorMessage={'City is required'}
                                            required
                                            margin="dense"
                                            label="City"
                                            fullWidth
                                        />}
                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <InputField
                                        value={Form.nationality}
                                        onChange={(event: any) => { fieldChangeHandler(formFields.Nationality, event.target.value) }}
                                        margin="dense"
                                        required
                                        ref={(ref: any) => inputRefs[3] = ref}
                                        error={Form.nationality == ''}
                                        errorMessage={'Nationality is required'}
                                        label="Nationality"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeModal} color={'default'}>Cancel</Button>
                        <Button onClick={submitHandler} color="primary">Save</Button>
                    </DialogActions>
                    {
                        loading && (<Loader />)
                    }
                </Dialog>
            </div>
        </MuiPickersUtilsProvider>
    )
}