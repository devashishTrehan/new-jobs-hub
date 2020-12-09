import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import InputField from '../../Components/TextField.component/TextField.component';
import '../Profile.page/Profile.page.css';
import { faPlus, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FormPages.css';
import { ProfileContext } from '../../Context/Profile.context';
import { UpdateSkills } from '../../Services/Api.service';
import { UserContext } from '../../Context/User.context';
import { Loader } from '../../Components/Loader.component/Loader.component';
import { FilterAttribsContext } from '../../Context/FilterAttribs.context';
import { Theme } from '../../Services/App.service';
import { ProfileSkillSection } from '../ProfileSections/Skills.section';


export const SkillFormPage = (props: any) => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { profileDetails, RequestResponseHandler, userProfileSlug } = useContext(ProfileContext);
    const { skills } = useContext(FilterAttribsContext);
    const { user, token } = useContext(UserContext);
    const { skills_list } = profileDetails;

    const [data, setData]: any = useState([]);
    const [loading, setLoading]: any = useState(false);
    const [newSkills, setNewSkills]: any = useState([]);
    const [deletedSkills, setDeletedSkills]: any = useState([]);
    const [actionType, setActionType] = useState('add');
    const [ModalOpen, setModalOpen] = useState(false);
    const [Form, setForm] = useState({
        skill: ''
    });

    const styles = {
        Chip: {
            margin: 5,
            color: Theme.secondaryFontColor,
            backgroundColor: Theme.LightBackgroundBlue
        },
        deleteIcon: {
            padding: 1,
            backgroundColor: Theme.error,
        }
    }

    useEffect(() => {
        setData(skills_list);
    }, [skills_list])


    const formFields = {
        skill: 'skill',
    }

    const fieldChangeHandler = (field: string, value: any) => {
        setForm((prev: any) => {
            return {
                ...prev,
                [field]: value
            }
        })
    }

    const findIndexOf = (array: any, item: any) => {
        let index = null;
        for (let i = 0; i < array.length; i++) {
            if ((array[i]).trim() === (item).trim()) {
                index = i;
                break;
            }
        }

        return index;

    }

    const onAddHandler = (event: any, newSkill: string = Form.skill) => {
        event.preventDefault();

        if (newSkill) {
            setData((prev: any) => {

                let index = findIndexOf(prev, newSkill);


                if (index === null) {
                    setNewSkills((prev: any) => {
                        return [
                            ...prev,
                            newSkill
                        ]
                    });

                    return [...prev, newSkill];
                } else {
                    return prev;
                }
            })
            setForm((prev: any) => {
                return {
                    ...prev,
                    skill: ''
                }
            })
        }
    }

    const onDeleteHandler = (skill: string) => {

        setData((prev: any) => {

            let oldSkills = [...prev];
            let index = findIndexOf(oldSkills, skill);
            if (index !== null) {

                oldSkills.splice(index, 1);

                setDeletedSkills((_prev: any) => [..._prev, skill]);


                return [...oldSkills];
            } else {
                return prev;
            }

        })
    }



    const openModal = (type: string) => {
        setActionType(type);
        if (type === 'add') {
            setData(data);
        }
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const submitHandler = async (event: any, _newSkills: any = newSkills, _deletedSkills: any = deletedSkills) => {
        event.preventDefault();

        setLoading(true);
        let response = await UpdateSkills(token?.access, userProfileSlug, { new: _newSkills, deleted: _deletedSkills });

        // console.log(response);

        setLoading(false);

        RequestResponseHandler(response, 'skills_list');
        if (response?.status) {
            setDeletedSkills([]);
            setNewSkills([]);
            setModalOpen(false);
        }

    }

    const onSkillDirectDelete = (event: any, skill: string) => {
        submitHandler(event, [], [skill]);
    }

    const renderSkills = () => {
        return (
            <div style={{ textAlign: 'left' }} >
                {
                    data?.map((skill: any) => {
                        return (
                            <Chip key={skill} style={styles.Chip} size={'medium'} label={skill}
                                onDelete={(event: any) => {
                                    onDeleteHandler(skill);
                                }} />
                        )
                    })
                }
            </div>
        )
    }

    const renderSuggestedSkills = (data: any) => {
        return (
            <div style={{ textAlign: 'left', maxHeight: 200, overflowY: 'scroll' }} >
                {
                    data?.map((skill: any) => {
                        if ((skill).toLowerCase().includes((Form.skill).toLowerCase())) {

                            return (
                                <Chip key={skill} style={styles.Chip} size={'medium'} onClick={(event: any) => onAddHandler(event, skill)} label={skill} icon={<FontAwesomeIcon style={{ padding: 1 }} icon={faPlus} />} />
                            )
                        }
                    })
                }
            </div>
        )
    }

    return (
        <div>

            <ProfileSkillSection isEditable={true} onAdd={() => openModal('add')} onDelete={(event: any, skill: string) => onSkillDirectDelete(event, skill)} />

            <Dialog fullWidth open={ModalOpen} onClose={closeModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{actionType} Skills</DialogTitle>
                <DialogContent>

                    <form onSubmit={(event: any) => onAddHandler(event)}>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                    <InputField
                                        autoFocus
                                        value={Form.skill}
                                        containerStyle={{ width: '100%' }}
                                        label={'Enter your skill'}
                                        onChange={(event: any) => fieldChangeHandler(formFields.skill, event.target.value)}
                                    />
                                    <IconButton color='primary' style={{ fontSize: 20 }} type='submit' ><FontAwesomeIcon icon={faPlus} /></IconButton>
                                </div>
                            </Grid>
                        </Grid>

                    </form>
                    <div>
                        {
                            skills?.length && Form.skill ?

                                <>
                                    <Typography variant={'caption'}>Suggested Skills</Typography>
                                    {
                                        renderSuggestedSkills(skills)
                                    }
                                </>
                                : null
                        }
                    </div>
                    <div>
                        {
                            data?.length ?
                                <>
                                    <Typography variant={'caption'}>Your Skills</Typography>
                                    {
                                        renderSkills()
                                    }
                                </>
                                : null
                        }
                    </div>

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