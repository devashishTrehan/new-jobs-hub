import { Button, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import '../Profile.page/Profile.page.css';
import './FormPages.css';
import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Domain } from '../../Services/Api.service';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Routes, Theme } from '../../Services/App.service';
import { ProfileContext } from '../../Context/Profile.context';


export const ProfileResumeSection = () => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { profileDetails } = useContext(ProfileContext);

    const { resume } = profileDetails;

    const [data, setData]: any = useState({
        has_no_resume: true,
        resume_uploaded_at: '',
        resume_file: ''

    });

    const history = useHistory();

    const [isSectionFocused, setIsSectionFocused] = useState(false);
    const sectionId = 'attach-resume';

    useEffect(() => {
        setData(resume)
    }, [resume])

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
                    'attach-resume-sec': true,
                    'border-shadow': true,
                    'focused-section': isSectionFocused
                })} id={sectionId}>
            <h3> Resume
                    <span className='profile-sec-comp-indicator' >
                    <FontAwesomeIcon icon={!data?.has_no_resume ? faCheckCircle : faTimesCircle} style={{ color: !data?.has_no_resume ? Theme.success : Theme.error }} />
                </span>
            </h3>
            <p>Resume is the most important document recruiters look for. Recuriter generally do not look at profile without resumes.</p>
            <form >
                {
                    !data?.has_no_resume ? <div className='resume-info-container-uploaded' >
                        <span className={'field'}>Resume : </span>
                        <span>
                            <a href={Domain + data?.resume_file} download> View</a>
                            <span> (<i>last updated at - {moment(data?.resume_uploaded_at).format('DD-MM-YYYY HH:mm:ss')}</i>)</span>
                        </span>
                    </div>
                        : <div >
                            <Typography style={{ textAlign: 'center', padding: 0 }} >No resume uploaded</Typography>
                        </div>
                }

            </form>
        </div>
    )
}
