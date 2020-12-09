import { Chip, IconButton, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import '../Profile.page/Profile.page.css';
import { faCheck, faCheckCircle, faPlus, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FormPages.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Theme } from '../../Services/App.service';
import { ProfileContext } from '../../Context/Profile.context';


export const ProfileSkillSection = (props: any) => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { profileDetails } = useContext(ProfileContext);
    const { onAdd, onDelete, isEditable } = props;
    const { skills_list } = profileDetails;

    const [data, setData]: any = useState([]);

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




    const [isSectionFocused, setIsSectionFocused] = useState(false);
    const sectionId = 'key-skills';

    useEffect(() => {
        setData(skills_list);
    }, [skills_list])

    const location = useLocation();
    useEffect(() => {
        if (location.hash == `#${sectionId}`) {
            setIsSectionFocused(true);
        } else {
            setIsSectionFocused(false);

        }
    }, [location.hash])



    const renderSkills = () => {
        return (
            <div style={{ textAlign: 'left' }} >
                {
                    isEditable ?
                        data?.map((skill: any) => {
                            return (
                                <Chip
                                    key={skill}
                                    style={styles.Chip}
                                    size={'medium'}
                                    label={skill}
                                    onDelete={(event: any) => {
                                        onDelete && onDelete(event, skill);
                                    }} />
                            )
                        })
                        : data?.map((skill: any) => {
                            return (
                                <Chip
                                    key={skill}
                                    style={styles.Chip}
                                    size={'medium'}
                                    label={skill} />
                            )
                        })
                }
            </div>
        )
    }



    return (
        <div className={
            classNames({
                'skills-sec': true,
                'border-shadow': true,
                'focused-section': isSectionFocused
            })}
            id={sectionId}>

            <div className={classNames("left-sec", { [isEditable]: 'left-sec-edit' })}>
                <h5>Key Skills
                    <span className='profile-sec-comp-indicator' >
                        <FontAwesomeIcon icon={data?.length ? faCheckCircle : faTimesCircle} style={{ color: data?.length ? Theme.success : Theme.error }} />
                    </span>
                </h5>
                {
                    data?.length ?
                        renderSkills()
                        : <Typography className={'helperText'} variant='body2'>Key skills are employability skills which are required to the considered application which shows what brings you up to the job. Adding your key skills helps you to get the job in your professional field quickly.</Typography>
                }
            </div>
            {
                isEditable ?

                    <div className="right-sec">
                        <IconButton onClick={() => onAdd && onAdd('add')}><FontAwesomeIcon icon={faPlus} /></IconButton>
                    </div>
                    : null
            }
        </div>

    )
}