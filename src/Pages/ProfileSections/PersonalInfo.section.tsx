import { Collapse, Divider, Grid, IconButton, Menu, useMediaQuery } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Profile.page/Profile.page.css';
import './FormPages.css';
import { faCaretDown, faCaretUp, faEdit, faEllipsisH, faMapMarkerAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { HeaderSection } from './HeaderImage.section';
import { UserActionList } from '../../Components/UserActionList.component/UserActionList.component';
import { ProfileContext } from '../../Context/Profile.context';
import { UserContext } from '../../Context/User.context';

export const ProfilePersonalInfoSection = (props: any) => {

    // Here userProfileSlug is getting from Profile context , the Id got from query parameter to prevent self updation...
    const { profileDetails, userProfileSlug } = useContext(ProfileContext);
    const { user } = useContext(UserContext);

    const { onAdd, onEdit, onDelete, isEditable } = props;

    const { profile_data } = profileDetails;
    const [data, setData]: any = useState({});
    const [isExpanded, setIsExpanded] = useState(false);
    const [UserMenuRef, setUserMenuRef]: any = React.useState(null);


    const [isSectionFocused, setIsSectionFocused] = useState(false);
    const isTablet = useMediaQuery('(max-width:767px)');
    const showUserMenu = useMediaQuery('(max-width:767px)');
    const sectionId = 'personal-info';


    const openUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setUserMenuRef(event.currentTarget);
    };

    const closeUserMenu = () => {
        setUserMenuRef(null);

    };


    useEffect(() => {
        setData(profile_data)
    }, [profile_data])

    useEffect(() => {
        if (isTablet) {
            setIsExpanded(false);
        } else {
            setIsExpanded(true);
        }
    }, [isTablet])

    const location = useLocation();
    useEffect(() => {
        if (location.hash == `#${sectionId}`) {
            setIsSectionFocused(true);
        } else {
            setIsSectionFocused(false);
        }
    }, [location.hash])



    const { full_name, headline, candidate_current_location, primary_number, alternate_phone, employment_status, email, marital_status, nationality, gender, date_of_birth } = data;
    return (

        <div id='personal-info' className="user-details">
            <div className={'border-shadow2 '}>

                <HeaderSection isEditable={isEditable} />

                {
                    showUserMenu && !isEditable && (user?.slug === userProfileSlug) && (
                        <>
                            <IconButton className={'UserMenuIcon'} onClick={openUserMenu} >
                                <FontAwesomeIcon icon={faEllipsisH} />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={UserMenuRef}
                                keepMounted
                                open={Boolean(UserMenuRef)}
                                onClose={closeUserMenu}
                                style={{ marginTop: 10 }}
                                getContentAnchorEl={null}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            >
                                <UserActionList closeMenu={closeUserMenu} />
                            </Menu>
                        </>
                    )
                }

                <div className="user-detail-inner">

                    <div className="com-info">
                        <h2 className="user-name">{full_name}</h2>
                        {
                            headline && (
                                <p className="user-headline">{headline}</p>
                            )
                        }
                        <Grid container spacing={1} justify='center' style={{ paddingBottom: 10 }}>
                            {
                                candidate_current_location && (
                                    <Grid item>
                                        <span>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                            <p className="com-add">{candidate_current_location}</p>
                                        </span>
                                    </Grid>
                                )
                            }
                        </Grid>
                        {/* <div className="col-md-5 com-name">
                                            <img src="images/c-logo.png" />
                                            <span> {employment_status}</span>
                                        </div> */}

                    </div>
                </div>
            </div>
            <div className={'border-shadow2 '}>
                <div className={'flex-container'} style={{ alignItems: 'baseline' }}>
                    <div className="left-sec">
                        <h5>Personal Info</h5>
                    </div>
                    <div className="right-sec">
                        <IconButton onClick={() => setIsExpanded((prev: boolean) => !prev)} > <FontAwesomeIcon icon={isExpanded ? faCaretUp : faCaretDown} /></IconButton>
                    </div>
                </div>
                <Collapse in={isExpanded} >
                    <Divider />
                    <div className={'flex-container'} style={{ alignItems: 'baseline' }}>
                        {
                            isEditable ?
                                <>
                                    <div className="left-sec"></div>
                                    <div className="right-sec">
                                        <IconButton onClick={() => onEdit && onEdit()} style={{ marginTop: 5 }} ><FontAwesomeIcon icon={faPencilAlt} /></IconButton>
                                    </div>
                                </>
                                : null
                        }
                    </div>
                    <Grid id='expanded-section' container className='collapseDetail' spacing={1} >
                        <Grid item xs={12} className='collapseDetailItem' >
                            <div>
                                <label>Email</label>
                                <p style={{ textTransform: 'lowercase' }} >{email}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} className='collapseDetailItem' >
                            <div>

                                <label>Primary Number</label>
                                <p>{primary_number}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} className='collapseDetailItem' >
                            <div>
                                <label>Alternate Number</label>
                                <p>{alternate_phone}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} className='collapseDetailItem' >
                            <div>
                                <label>Date of Birth</label>
                                <p>{moment(date_of_birth).format('DD-MM-YYYY')}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} className='collapseDetailItem'>
                            <div>
                                <label>Gender</label>
                                <p>{gender}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} className='collapseDetailItem'>
                            <div>
                                <label>Marital status</label>
                                <p>{marital_status}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} className='collapseDetailItem'>
                            <div>
                                <label>Nationality</label>
                                <p>{nationality}</p>
                            </div>
                        </Grid>
                    </Grid>
                </Collapse>
            </div>
        </div>
    )
}