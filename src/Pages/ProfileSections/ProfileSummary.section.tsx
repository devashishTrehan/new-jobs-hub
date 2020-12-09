import { IconButton, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import '../Profile.page/Profile.page.css';
import { faCheck, faCheckCircle, faPencilAlt, faPlus, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FormPages.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { UserContext } from '../../Context/User.context';
import { Theme } from '../../Services/App.service';
import { ProfileContext } from '../../Context/Profile.context';


export const ProfileSummarySection = (props: any) => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { profileDetails } = useContext(ProfileContext);
    const { user, token } = useContext(UserContext);
    const { onAdd, onEdit, onDelete, isEditable } = props;
    const { summary } = profileDetails;

    const [data, setData]: any = useState('');



    const [isSectionFocused, setIsSectionFocused] = useState(false);
    const sectionId = 'profile-summary';

    useEffect(() => {
        setData(summary)
    }, [summary])

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
                    'profile-summary-sec': true,
                    'border-shadow': true,
                    'focused-section': isSectionFocused
                })}
            id={sectionId}>

            <div className={classNames("left-sec", { [isEditable]: 'left-sec-edit' })}>
                <h5>Profile Summary
                    <span className='profile-sec-comp-indicator' >
                        <FontAwesomeIcon icon={data?.length ? faCheckCircle : faTimesCircle} style={{ color: data?.length ? Theme.success : Theme.error }} />
                    </span>
                </h5>
                {
                    data ?
                        <p>{data}</p>
                        : <Typography className={'helperText'} variant='body2'>Profile summary carries your professional details and mentions your professional highlights in a specific field you are working in.</Typography>
                }
            </div>
            {
                isEditable ?
                    <div className="right-sec">
                        {
                            data ?
                                <IconButton onClick={() => onEdit && onEdit('update')}><FontAwesomeIcon icon={faPencilAlt} /></IconButton>
                                : <IconButton onClick={() => onAdd && onAdd('add')} ><FontAwesomeIcon icon={faPlus} /></IconButton>
                        }
                    </div>
                    : null
            }
        </div>

    )
}
