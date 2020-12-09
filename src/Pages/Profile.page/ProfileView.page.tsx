import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, useMediaQuery, } from '@material-ui/core';
import * as React from 'react';
import { UserActionList } from '../../Components/UserActionList.component/UserActionList.component';
import ProfileContextProvider, { ProfileContext } from '../../Context/Profile.context';
import { ProfileEducationSection } from '../ProfileSections/Education.section';
import { ProfileEmploymentSection } from '../ProfileSections/Employment.section';
import { ProfilePersonalInfoSection } from '../ProfileSections/PersonalInfo.section';
import { ProfileSummarySection } from '../ProfileSections/ProfileSummary.section';
import { ProfileProjectSection } from '../ProfileSections/Projects.section';
import { ProfileResumeSection } from '../ProfileSections/Resume.section';
import { ProfileResumeHeadlineSection } from '../ProfileSections/ResumeHeadline.section';
import { ProfileSkillSection } from '../ProfileSections/Skills.section';
import './Profile.page.css';


const ProfileStrength = () => {

  const { profileDetails } = React.useContext(ProfileContext);
  const { profile_completion_percentage: percentage } = profileDetails.profile_data;


  return (
    <>
      <div className="profile-strength border-shadow2">
        <div className="profile-cmplt">
          <h4 className="pb-2">Profile Strength : <span>{percentage}%</span>
            {/* <span>Looking Good --</span> */}
          </h4>
          <div className='strength-strip-wrap'>
            <div className="strength-strip"></div>
            <div className="strength-strip-view" style={{ width: percentage ? `${(100 - parseInt(percentage))}%` : '0%' }}>
              {
                percentage && (
                  <div className='strength-strip-icon'>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const QuickLinksSection = () => {

  const NotShowUserMenu = useMediaQuery('(max-width:767px)');

  return (
    <>

      <div className="col-md-4 col-sm-12 col-12 ">
        <div className='profile-header'>
          <ProfilePersonalInfoSection isEditable={false} />
        </div>

        <ProfileStrength />

        {
          !NotShowUserMenu && (
            <>
              <div className='border-shadow2'>
                <UserActionList />
              </div>

              {/* <SocialMediaList /> */}
            </>
          )
        }

      </div>
    </>
  )
}

const SocialMediaList = () => {
  return (
    <Grid container justify='center' className='border-shadow2 socialLink-list'>
      <Grid item><FontAwesomeIcon icon={faFacebookF} /></Grid>
      <Grid item><FontAwesomeIcon icon={faTwitter} /></Grid>
      <Grid item><FontAwesomeIcon icon={faInstagram} /></Grid>
    </Grid>
  )
}



const MainBodySection = (props: any) => {



  return (
    <>
      <div className="clearfix"></div>
      <div className="container mt-2 profile-page-wrap">
        <div className="row">

          <QuickLinksSection />

          <DetailFormSection />


        </div>
      </div>
    </>
  )
}

const DetailFormSection = (props: any) => {

  const ShowSocialLinks = useMediaQuery('(max-width:767px)');

  return (

    <>
      <div className="clearfix"></div>
      <div className="col-md-8 col-sm-12 col-12">
        <div className="profile-del-add">

          <ProfileResumeSection />

          <ProfileResumeHeadlineSection isEditable={false} />

          <ProfileSummarySection isEditable={false} />

          <ProfileSkillSection isEditable={false} />

          <ProfileEmploymentSection isEditable={false} />

          <ProfileEducationSection isEditable={false} />

          {/* project field will be added in next phase */}
          {/* <ProfileProjectSection /> */}

        </div>
      </div>
    </>
  )
}


function Profile(props: any) {


  return (
    <ProfileContextProvider>

      <MainBodySection />

    </ProfileContextProvider>
  );
}

export default Profile;