import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import '../Profile.page/Profile.page.css';
import './FormPages.css';
import { ProfileContext } from '../../Context/Profile.context';
import { Loader } from '../../Components/Loader.component/Loader.component';
import { UpdateProfileSummary } from '../../Services/Api.service';
import { UserContext } from '../../Context/User.context';
import InputArea from '../../Components/TextArea.component/TextArea.component';
import { ProfileSummarySection } from '../ProfileSections/ProfileSummary.section';


export const ProfileSummaryFormPage = (props: any) => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { profileDetails, RequestResponseHandler, userProfileSlug } = useContext(ProfileContext);
    const {  token } = useContext(UserContext);
    const { summary } = profileDetails;

    const [loading, setLoading]: any = useState(false);
    const [data, setData]: any = useState('');
    const [actionType, setActionType] = useState('add');
    const [ModalOpen, setModalOpen] = useState(false);
    const [Form, setForm] = useState({
        summary: ''
    });


    useEffect(() => {
        setData(summary)
    }, [summary])



    const formFields = {
        Summary: 'summary',
    }

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
            fieldChangeHandler(formFields.Summary, data);
        }
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const submitHandler = async (event: any) => {
        event.preventDefault();

        const { summary } = Form;
        setLoading(true);
        let response = await UpdateProfileSummary(token?.access, userProfileSlug, {
            summary: summary,
        });
        // console.log('response of profile update', response);
        setLoading(false);

        RequestResponseHandler(response, 'summary');
        if (response?.status) {
            setModalOpen(false);
        }
    }

    return (
        <div>

            <ProfileSummarySection isEditable={true} onAdd={() => openModal('add')} onEdit={() => openModal('update')} />


            <Dialog fullWidth open={ModalOpen} onClose={closeModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{actionType} Profile Summary</DialogTitle>
                <DialogContent>


                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <InputArea
                                error={Form.summary == ''}
                                errorMessage={'Profile summary is required'}
                                className={'textarea'}
                                value={Form.summary}
                                label={'Enter your profile summary'}
                                onChange={(event: any) => fieldChangeHandler(formFields.Summary, event.target.value)}
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
