import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, Select} from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import InputField from '../../Components/TextField.component/TextField.component';
import '../Profile.page/Profile.page.css';
import './FormPages.css';
import { useLocation } from 'react-router-dom';
import { ProfileContext } from '../../Context/Profile.context';
import { Loader } from '../../Components/Loader.component/Loader.component';
import { DeleteUserProjects, UpdateProjects } from '../../Services/Api.service';
import { UserContext } from '../../Context/User.context';
import { Theme, ValidateFields } from '../../Services/App.service';
import InputArea from '../../Components/TextArea.component/TextArea.component';
import { AppContext } from '../../Context/App.context';
import { ConfirmBox } from '../../Components/ConfirmBox.component';
import { ProfileProjectSection } from '../ProfileSections/Projects.section';


export const ProjectsFormPage = (props: any) => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { profileDetails, RequestResponseHandler, userProfileSlug } = useContext(ProfileContext);
    const { openSnackbar } = useContext(AppContext);
    const {  token } = useContext(UserContext);
    const { projects } = profileDetails;

    const [loading, setLoading]: any = useState(false);
    const [data, setData]: any = useState([]);
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
        projectName: '',
        groupSize: 'null',
        role: '',
        description: '',
        link: '',
    }
    const [Form, setForm] = useState(initialFormData);


    let inputRefs: any = [];

    useEffect(() => {
        setData(projects)
    }, [projects])


    const formFields = {
        Id: 'id',
        ProjectName: 'projectName',
        GroupSize: 'groupSize',
        Role: 'role',
        Description: 'description',
        Link: 'link'
    }

    const fillFields = (data: any, phase: 'update' | 'initial' = 'initial') => {

        if (phase == 'update') {

            setForm((prev: any) => {
                return {
                    ...prev,
                    id: data.id,
                    projectName: data.name,
                    groupSize: data.size_of_group,
                    role: data.role,
                    description: data.description,
                    link: data.link
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

        const { projectName, groupSize, role, description, link } = Form;
        let isError = !projectName || !groupSize || !role || !description;
        if (!isError) {
            setLoading(true);
            let response = await UpdateProjects(token?.access, userProfileSlug, {
                name: projectName,
                role: role,
                size_of_group: groupSize,
                description: description,
                link: link
            }, Form.id);
            // console.log('response of profile update', response);
            setLoading(false);

            RequestResponseHandler(response, 'experience');
            if (response?.status) {
                setModalOpen(false);
            }
        } else {
            ValidateFields([!projectName, !role, !description], inputRefs);
            openSnackbar(['Fill requireds fields']);
        }
    }

    const DeleteProject = async (id: number) => {
        setLoading(true);

        let response = await DeleteUserProjects(token?.access, userProfileSlug, id);
        // console.log('response of profile update', response);

        setLoading(false);

        RequestResponseHandler(response, 'projects');
    }

    return (
        <div>

            <ProfileProjectSection isEditable={true} onAdd={() => openModal('add')} onDelete={(deleteId: number) => openConfirmBox(deleteId)} onEdit={(data: any) => openModal('update', data)} />

            <ConfirmBox show={confirmBoxOpen} onClose={() => setConfirmBoxOpen(false)} onConfirm={() => DeleteProject(deleteId)} />

            <Dialog fullWidth open={ModalOpen} onClose={closeModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{actionType} Project</DialogTitle>
                <DialogContent>

                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <InputField
                                    required
                                    ref={(ref: any) => inputRefs[0] = ref}
                                    error={Form.projectName == ''}
                                    errorMessage={'Project name is required'}
                                    value={Form.projectName}
                                    label='Project Name'
                                    onChange={(event: any) => { fieldChangeHandler(formFields.ProjectName, event.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Select
                                    required
                                    className={'fullwidth'}
                                    value={Form.groupSize}
                                    onChange={(event: any) => { fieldChangeHandler(formFields.GroupSize, event.target.value) }}
                                >
                                    <MenuItem value={'null'}>Group Size</MenuItem>
                                    <MenuItem value={'2-5'}>2-5</MenuItem>
                                    <MenuItem value={'6-10'}>6-10</MenuItem>
                                    <MenuItem value={'11-20'}>11-20</MenuItem>
                                    <MenuItem value={'21+'}>21+</MenuItem>
                                    <MenuItem value={'Individual'}>Individual</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <InputField
                                    required
                                    ref={(ref: any) => inputRefs[1] = ref}
                                    error={Form.role == ''}
                                    errorMessage={'Role is required'}
                                    value={Form.role}
                                    label='Role'
                                    onChange={(event: any) => { fieldChangeHandler(formFields.Role, event.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputField
                                    value={Form.link}
                                    label='Project Link'
                                    onChange={(event: any) => { fieldChangeHandler(formFields.Link, event.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputArea
                                    required
                                    ref={(ref: any) => inputRefs[2] = ref}
                                    error={Form.description == ''}
                                    errorMessage={'project description is required'}
                                    className={'textarea'}
                                    label={'Project Description'}
                                    value={Form.description}
                                    onChange={(event: any) => { fieldChangeHandler(formFields.Description, event.target.value) }}
                                />
                            </Grid>
                        </Grid>
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
        </div>
    )
}