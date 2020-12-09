import { IconButton, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import '../Profile.page/Profile.page.css';
import './FormPages.css';
import { faCheck, faCheckCircle, faPencilAlt, faPlus, faTimes, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { Theme } from '../../Services/App.service';
import classNames from 'classnames';
import { ProfileContext } from '../../Context/Profile.context';


export const ProfileEducationSection = (props: any) => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { profileDetails } = useContext(ProfileContext);
    const { onAdd, onEdit, onDelete, isEditable } = props;
    const { education } = profileDetails;

    const [data, setData]: any = useState([]);


    const [isSectionFocused, setIsSectionFocused] = useState(false);
    const sectionId = 'education';

    useEffect(() => {
        setData(education)
    }, [education])

    const location = useLocation();
    useEffect(() => {

        if (location.hash == `#${sectionId}`) {
            setIsSectionFocused(true);
        } else {
            setIsSectionFocused(false);

        }
    }, [location.hash])



    return (
        <div
            className={
                classNames({
                    'education-sec': true,
                    'border-shadow': true,
                    'focused-section': isSectionFocused
                })}
            id={sectionId}>

            <div style={{ width: '100%' }}>
                <div className={'flex-container'}>
                    <div className={classNames("left-sec", { [isEditable]: 'left-sec-edit' })}>
                        <h5>Education
                                <span className='profile-sec-comp-indicator' >
                                <FontAwesomeIcon icon={data?.length ? faCheckCircle : faTimesCircle} style={{ color: data?.length ? Theme.success : Theme.error }} />
                            </span>
                        </h5>
                        {
                            !data?.length && (
                                <Typography className={'helperText'} variant='body2'>Education is a section where you can list your degrees, diplomas, certificates etc. in relevant academics.</Typography>
                            )
                        }
                    </div>
                    {
                        isEditable ?

                            <div className="right-sec">
                                <IconButton onClick={() => onAdd && props.onAdd()} > <FontAwesomeIcon icon={faPlus} /></IconButton>
                            </div>
                            : null
                    }
                </div>
                {
                    data?.map((education: any) => {
                        return (

                            <div key={education?.id} className={'flex-container section-list-item'}>

                                <div className={classNames("left-sec", { [isEditable]: 'left-sec-edit' })}>
                                    <ul>
                                        <li><span>Course Name:</span> <span>{education.course_name}</span></li>
                                        <li><span>Area of study:</span> <span>{education.trade}</span></li>
                                        <li><span>Graduated from:</span> <span>{education.graduated_from}</span></li>
                                        <li><span></span> <span>{education.year_of_start} to {education.year_of_graduation ? education.year_of_graduation : 'present'}</span></li>
                                        <li><span></span> <span>
                                            {education.city_name}
                                            {/* {
                                                    education.state_name && (<>, {education.state_name}</>)
                                                }
                                                {
                                                    education.country_name && (<>, {education.country_name}</>)
                                                } */}
                                        </span></li>
                                    </ul>
                                </div>
                                {
                                    isEditable ?
                                        <div className={"right-sec"}>
                                            <IconButton onClick={() => onEdit && props.onEdit(education)}> <FontAwesomeIcon icon={faPencilAlt} /></IconButton>
                                            <IconButton onClick={() => onDelete && props.onDelete(education.id)}> <FontAwesomeIcon icon={faTrash} /></IconButton>
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