import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import '../Profile.page/Profile.page.css';
import './FormPages.css';
import { ProfileContext } from '../../Context/Profile.context';
import { Loader } from '../../Components/Loader.component/Loader.component';
import { UserContext } from '../../Context/User.context';
import { UpdateProfileHeadline } from '../../Services/Api.service';
import InputArea from '../../Components/TextArea.component/TextArea.component';
import {  ValidateFields } from '../../Services/App.service';
import { ProfileResumeHeadlineSection } from '../ProfileSections/ResumeHeadline.section';


export const ResumeHeadlineFormPage = (props: any) => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { RequestResponseHandler, userProfileSlug, profileDetails } = useContext(ProfileContext);
    const { user, token } = useContext(UserContext);
    const [loading, setLoading]: any = useState(false);
    const [data, setData] = useState('');
    const [actionType, setActionType] = useState('add');
    const [ModalOpen, setModalOpen] = useState(false);
    const { headline } = profileDetails;

    const [Form, setForm] = useState({
        headline: ''
    });

    let inputRefs: any = [];


    const formFields = {
        Headline: 'headline',
    }

    useEffect(() => {
        setData(headline)
    }, [headline])

    const fieldChangeHandler = (field: string, value: any) => {
        setForm((prev: any) => {
            return {
                ...prev,
                [field]: value
            }
        })
    }

    const openModal = (type: string) => {
        setActionType(type);
        if (type == 'update') {
            fieldChangeHandler(formFields.Headline, data);
        }
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const submitHandler = async (event: any) => {
        event.preventDefault();

        const { headline } = Form;
        let isError = !headline;
        if (!isError) {
            setLoading(true);
            let response = await UpdateProfileHeadline(token?.access, userProfileSlug, {
                headline: headline,
            });
            // console.log('response of profile update', response);
            setLoading(false);

            RequestResponseHandler(response, 'headline');
            if (response?.status) {
                setModalOpen(false);
            }
        } else {
            ValidateFields([!headline], inputRefs)
        }
    }


    return (
        <div>

            <ProfileResumeHeadlineSection isEditable={true} onAdd={() => openModal('add')} onEdit={() => openModal('update')} />

            <Dialog fullWidth open={ModalOpen} onClose={closeModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{actionType} Resume Headline</DialogTitle>
                <DialogContent>


                    <Grid container spacing={2} >

                        <Grid item xs={12}>
                            <InputArea
                                ref={(ref: any) => inputRefs[0] = ref}
                                error={Form.headline == ''}
                                errorMessage={'Headline is required'}
                                className={'textarea'}
                                label={'Enter your resume headline...'}
                                value={Form.headline}
                                onChange={(event: any) => fieldChangeHandler(formFields.Headline, event.target.value)}
                            />
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} color="default">Cancel</Button>
                    <Button onClick={submitHandler} color="primary">Save</Button>
                </DialogActions>
                {
                    loading && (<Loader />)
                }
            </Dialog>
        </div>
    )
}
