
import { faCheck, faClipboardCheck, faEye, faHeart, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@material-ui/core';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { JobStatusList, Routes, Theme } from '../../Services/App.service';
import './UserActionList.style.css';

export const UserActionList = (props: any) => {

  const history = useHistory();

  const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org',
  }



  // Must be triggered some kind of "user activation"
  const share = async () => {
    try {
      await navigator.share({ title: "Example Page", url: "" });
      console.log("Data was shared successfully");
    } catch (err) {
      console.error("Share failed:", err.message);
    }
  }

  const ShowJobs = (status: string) => {
    props?.closeMenu && props.closeMenu();
    history.push(Routes.Jobs + Routes._UserJobsRoute + `/${status}`)
  }

  return (

    <List className={'user-action-list'}>

      <ListItem button onClick={() => ShowJobs(JobStatusList.Viewed)}>
        <ListItemIcon className='icon' style={{ color: Theme.info }}>
          <FontAwesomeIcon icon={faEye} />
        </ListItemIcon>
        <ListItemText className='text'>Viewed Jobs</ListItemText>
      </ListItem>

      <Divider />

      <ListItem button onClick={() => ShowJobs(JobStatusList.Saved)}>
        <ListItemIcon className='icon'>
          <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
        </ListItemIcon>
        <ListItemText className='text'>Saved Jobs</ListItemText>
      </ListItem>

      <Divider />

      <ListItem button onClick={() => ShowJobs(JobStatusList.Applied)} >
        <ListItemIcon className='icon'>
          <FontAwesomeIcon icon={faCheck} style={{ color: Theme.success }} />
        </ListItemIcon>
        <ListItemText className='text'>Applied Jobs</ListItemText>
      </ListItem>

      <Divider />

      <ListItem button onClick={() => ShowJobs(JobStatusList.Shortlisted)} >
        <ListItemIcon className='icon'>
          <FontAwesomeIcon icon={faClipboardCheck} style={{}} />
        </ListItemIcon>
        <ListItemText className='text'>Shortlisted Applications</ListItemText>
      </ListItem>

      <Divider />

      <ListItem button onClick={() => ShowJobs(JobStatusList.Rejected)} >
        <ListItemIcon className='icon'>
          <FontAwesomeIcon icon={faTimesCircle} style={{ color: Theme.error }} />
        </ListItemIcon>
        <ListItemText className='text'>Rejected Applications</ListItemText>
      </ListItem>

    </List>
  )
}