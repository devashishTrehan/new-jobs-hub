import { IconButton, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import '../Profile.page/Profile.page.css';
import { faCheck, faCheckCircle, faPencilAlt, faPlus, faTimes, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FormPages.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Theme } from '../../Services/App.service';
import { ProfileContext } from '../../Context/Profile.context';


export const ProfileProjectSection = (props: any) => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { profileDetails, } = useContext(ProfileContext);
    const { projects } = profileDetails;
    const { onAdd, onEdit, onDelete, isEditable } = props;

    const [data, setData]: any = useState([]);


    const [isSectionFocused, setIsSectionFocused] = useState(false);
    const sectionId = 'project';

    useEffect(() => {
        setData(projects)
    }, [projects])

    const location = useLocation();
    useEffect(() => {
        if (location.hash == `#${sectionId}`) {
            setIsSectionFocused(true);
        } else {
            setIsSectionFocused(false);

        }
    }, [location.hash])


    return (
        <div className={
            classNames({
                'project-sec': true,
                'border-shadow': true,
                'focused-section': isSectionFocused
            })}
            id={sectionId}>

            <div style={{ width: '100%' }}>
                <div className={'flex-container'}>
                    <div className={classNames("left-sec", { [isEditable]: 'left-sec-edit' })}>
                        <h5>Projects
                            <span className='profile-sec-comp-indicator' >
                                <FontAwesomeIcon icon={data?.length ? faCheckCircle : faTimesCircle} style={{ color: data?.length ? Theme.success : Theme.error }} />
                            </span>
                        </h5>
                        {
                            !data?.length && (
                                <Typography className={'helperText'} variant='body2'>Career profile helps you to build a brief statement in which you have mentioned your work experience or career changer in a specific field.</Typography>
                            )
                        }
                    </div>
                    {
                        isEditable ?
                            <div className="right-sec">
                                <IconButton onClick={() => onAdd && onAdd()} > <FontAwesomeIcon icon={faPlus} /></IconButton>
                            </div>
                            : null
                    }
                </div>
                {
                    data?.map((project: any) => {
                        return (

                            <div key={project.id} className={'flex-container section-list-item'}>

                                <div className={classNames("left-sec", { [isEditable]: 'left-sec-edit' })}>
                                    <ul>
                                        <li><span>project Title: {project.name}</span></li>
                                        <li><span>Role: {project.role}</span></li>
                                        <li><span>Group size: {project.size_of_group}</span></li>
                                        <li><span>Description: {project.description}</span></li>
                                    </ul>
                                </div>
                                {
                                    isEditable ?
                                        <div className="right-sec">
                                            <IconButton onClick={() => onEdit && onEdit(project)}> <FontAwesomeIcon icon={faPencilAlt} /></IconButton>
                                            <IconButton onClick={() => onDelete && onDelete(project.id)}> <FontAwesomeIcon icon={faTrash} /></IconButton>
                                        </div>
                                        : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}