import * as React from 'react';
import { Loader } from '../Components/Loader.component/Loader.component';
import { makeStyles } from '@material-ui/core/styles';
import { ApplyToJob, GetJobDetail, SaveJob } from '../Services/Api.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheck, faEllipsisV, faHeart, faMapMarkerAlt, faMoneyBill, faStar } from '@fortawesome/free-solid-svg-icons';
import { Button, CircularProgress, Grid, IconButton, Typography, useMediaQuery } from '@material-ui/core';
import { CustomButton } from '../Components/CustomButton.component';
import { JobStatusList, RequestStatusList, Routes, Theme, ErrorTypes } from '../Services/App.service';
import classNames from 'classnames';
import { NavBar } from '../Components/Navbar.component';
import { UserContext } from '../Context/User.context';
import { JobDetailSkeleton } from '../Components/JobDetailSkeleton.component';
import { SomethingWentWrong } from '../Components/SomethingWrong.component';
import { NoResult } from '../Components/NoResult.component';
import { JobListContext } from '../Context/JobList.context';
import { AppContext } from '../Context/App.context';
import { ConfirmBox } from '../Components/ConfirmBox.component';
import { useHistory } from 'react-router-dom';
import { MailSent } from './MailSent.page';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: 'auto',
    textAlign: 'left',
    boxSizing: 'border-box',
    padding: '0 20px 40px',

  },
  container_L: {
    maxHeight: 'calc(100vh - 180px)',
    overflowY: 'scroll',
  },
  head: {
    padding: '15px',
    borderRadius: Theme.radius2,
    border: `1px solid #ccc`,
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    zIndex: 99,
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 100
  },
  logoWrap: {
    textAlign: 'left'
  },
  logo: {
    alignItems: 'left',
    borderRadius: Theme.radius1,
    // border: '1px solid #ccc8'
  },
  logo_S: {
    width: 65,
    height: 65,
  },
  logo_L: {
    width: 100,
    height: 100,
  },
  contentBody: {
    padding: '0 20px',
    '& ul': {
      listStyle: 'none'
    }
  },
  iconButton: {
    marginLeft: 10,
    '& svg': {
      fontSize: 16
    },
    '&:focus': {
      outline: 'none'
    }
  },
  favoriteButton: {
    '& svg': {
      fontSize: '24px',
    },
  },
  menuButton: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  savedJob: {
    backgroundColor: '#FF000022',
    color: '#FF0000',
    animation: 'SaveJob .6s linear',
    // '&::after':{
    //   animation: 'SaveJob2 .6s linear',
    // }
  },
  icons: {
    color: Theme.secondary,
    marginRight: 10
  },
  buttonsWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    '&>div': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    '& .loader': {
      width: 50,
      height: 50,
      padding: 5,
      marginLeft: 10,
    }
  },
  specificationContainer: {
    padding: '30px 0'
  },
  specification: {
    '& h6': {
      marginBottom: 10
    },
    '& p': {
      fontWeight: 100,
    }
  }
});


export function JobDetail(props: any) {

  const [jobDetail, setJobDetail]: any = React.useState({
    //  job_title_name: "Python Developer", is_applied: false, time_difference: "23  days ago", skills_list: ["Python", "Application Development", "Software Architecture", "Artificial Intelligence", "Python"], job_description: "Job Description\r\n\r\nWe are looking for a Python Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, api, ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your co-workers into the application; therefore, a basic understanding of front-end technologies is necessary as well.\r\n\r\nResponsibilities\r\n\r\nWriting reusable, testable, and efficient code\r\n\r\nDesign and implementation of low-latency, high-availability, and performant applications\r\n\r\nIntegration of user-facing elements developed by front-end developers with server side logic\r\n\r\nImplementation of security and data protection\r\n\r\nIntegration of data storage solutions with the apps\r\n\r\nWrite and implement software solutions that integrate different systems.\r\n\r\nIdentify and suggest various opportunities to improve efficiency and functionality.\r\n\r\nWrite reusable and testable code.", salary_offered: "4-8 Lakh INR per Year", type: "FULLTIME", experience_required: "1-3 years", company_name: "Test Company", industry_list: ["Information & Technology", "Software"], city_list: ["Ghaziabad", "New Delhi", "Hyderabad"], education_list: ["Bachelor of Technology"], slug: "python-developer-test-company-1-3-years7ghdj", is_remote: false, total_applicants: 3 
  });
  // const [jobId, setJobId] = React.useState('');
  // const [RequestState, setrequestState] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [confirmBoxOpen, setConfirmBoxOpen] = React.useState(false);
  const [loading, setLoding] = React.useState(false);
  const [Applying, setApplying] = React.useState(false);
  const [Saving, setSaving] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width:960px)');
  const { token, user } = React.useContext(UserContext);
  const { updateJob } = React.useContext(JobListContext);
  const { openSnackbar, showAlert, hideAlert, PushNavigationRoute, showModal, hideModal } = React.useContext(AppContext);
  const isMobile = useMediaQuery('(max-width:767px');

  const history = useHistory();
  // const { jobId } = useParams();


  const styles = useStyles();

  const {
    id,
    job_title_name,
    job_description,
    salary_offered,
    time_difference,
    type,
    experience_required,
    company_name,
    total_applicants,
    reported_by,
    industry_list,
    city_list,
    education_list,
    slug,
    is_saved,
    application_status,
    company_logo

  } = jobDetail;

  const ResponseHandler = (response: any, callback: Function) => {
    console.log('jobs', response)
    if (response) {
      if (response.is_authenticated) {

        if (response?.status == false) {
          let missingSections = response?.additional_data?.missing_sections;
          if (missingSections?.length) {
            showAlert(response.message, RequestStatusList.Error,
              <Button color='primary' onClick={() => {
                hideAlert();
                PushNavigationRoute(props.history.location.pathname);
                history.push({
                  pathname: `${Routes._ProfileRoute}/${user?.slug}`,
                  hash: missingSections[0]
                })
              }}>Add</Button>)
          } else if (response?.additional_data?.error_type === ErrorTypes.UNVERIFIED_EMAIL) {
            showAlert(response.message, RequestStatusList.Error,
              <Button color='primary' onClick={() => {
                hideAlert();
                // window.open(`${Routes.MailSent}/?m_id=user`, '_blank');
                showModal(<MailSent user={user} userToken={token} onClose={() => hideModal()} />)
              }}>Proceed</Button>)
          }

        } if (response?.status) {
          callback()
        }
      } else {
        openSnackbar(['You are not authorized to access']);
      }
    } else {
      openSnackbar(['Sorry! \n Something went wrong']);
    }
  }

  const openConfirmBox = () => {
    setConfirmBoxOpen(true);
  }

  const getJobDetail = async (slug: string) => {
    console.time('detail');
    console.timeLog('start');
    setLoding(true);
    let response = await GetJobDetail(token?.access, slug, user?.id);
    console.timeEnd('detail');
    setLoding(false);
    if (response) {
      if (response.is_authenticated) {
        if (response?.status == false) {
          setMessage(response.message);
        } if (response?.status) {
          setMessage('');
          setJobDetail(response?.data);
        }
      } else {
        setMessage('You are not authorized to access');
      }
    } else {
      setMessage('Sorry! \n Something went wrong');
    }
  }

  const updateJobInList = (response: any, updateObject: any) => {
    setJobDetail(response?.data);
    updateJob(response?.data.slug, updateObject);
  }

  const ConfirmApplyJob = () => {
    if (application_status === JobStatusList.Applied) {
      openConfirmBox();
    } else {
      ApplyForJob()
    }
  }

  const showLoginDialog = () => {
    showAlert(['You are not logged In \n Please Log In'], RequestStatusList.Error,
      <Button color='primary' onClick={() => {
        hideAlert();
        PushNavigationRoute(props.history.location.pathname);
        history.push({
          pathname: `${Routes.User}`,
          hash: Routes.SignInHashes.exist,
          state: { ...props.location.state }
        })
      }}>Login</Button>)
  }

  const ApplyForJob = async () => {
    if (user?.id) {

      setApplying(true);
      let response = await ApplyToJob(token?.access, user?.id, jobDetail.slug);
      setApplying(false);

      console.log('save response', response);
      ResponseHandler(response, () => {
        updateJobInList(response, { application_status: response?.data.application_status });
      })
    } else {
      showLoginDialog();
    }
  }


  const saveJob = async () => {
    if (user?.id) {
      setSaving(true);
      let response = await SaveJob(token?.access, user?.id, jobDetail.slug);
      setSaving(false);

      console.log('save response', response);
      ResponseHandler(response, () => {
        updateJobInList(response, { is_saved: response?.data.is_saved })
      })
    } else {
      showLoginDialog();
    }
  }




  React.useEffect(() => {
    console.log('fetching job details 2')
    console.log(`${props.match.params?.job} !== ${jobDetail?.slug}`, props.match.params?.job !== jobDetail?.slug)
    if (props.match.params?.job !== jobDetail?.slug) {
      setLoding(true);
      let job = props.match.params?.job;
      getJobDetail(job);
    }
  }, [props.match.params])

  const setButtontext = () => {
    if (Applying) {
      if (application_status === JobStatusList.Applied) {
        return 'Unapplying'
      } else {
        return 'Applying...'
      }
    } else {
      if (application_status === JobStatusList.Applied) {
        return <div>
          <span>Applied</span>
          <FontAwesomeIcon style={{ marginLeft: 5, fontSize: 14 }} icon={faCheck} />
        </div>
      } else {
        return 'Apply Now'
      }
    }
  }


  const defaultLogo = '/assets/bg-images/companyDefault.png';

  return (
    <>
      {

        loading ? <JobDetailSkeleton />

          : message && (jobDetail === null) ? <SomethingWentWrong message={message} />

            : message && !jobDetail?.id ? <NoResult message={message} />

              : <div className={classNames(styles.container, { [styles.container_L]: isDesktop })}>

                <div className={styles.head} >
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Grid container spacing={3} >

                      <Grid item>
                        <img className={classNames(styles.logo, isMobile ? styles.logo_S : styles.logo_L)} src={company_logo ? company_logo : defaultLogo} alt='company_logo' />
                      </Grid>

                      <Grid item style={{ flexGrow: 1 }} >
                        <div>
                          <Typography className={classNames(styles.title)}  >{job_title_name}</Typography>
                          <Typography className={classNames('spacing', styles.subTitle)}  >{company_name}</Typography>
                          <span className={'spacing'} style={{ fontWeight: 400, color: 'gray' }}>
                            {time_difference}
                            <span className={'dotSeparator'} >.</span>
                            <span className={'highlighted'} >{total_applicants} applicants</span>
                          </span>
                        </div>
                      </Grid>

                      <IconButton className={classNames(styles.iconButton, styles.menuButton)} style={{ padding: '7px 15px' }} aria-label="Delete" >
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </IconButton>

                      <Grid item className={styles.buttonsWrap}>

                        <div >
                          <CustomButton
                            style={{ padding: '5px 20px', marginLeft: 0 }}
                            color='default'
                            onClick={ConfirmApplyJob} >
                            {
                              setButtontext()
                            }
                          </CustomButton>

                          {
                            Saving ?
                              <CircularProgress className='loader' />
                              : <IconButton onClick={() => saveJob()} size={'medium'} className={classNames(styles.favoriteButton, {
                                [styles.iconButton]: true,
                                [styles.savedJob]: is_saved

                              })} aria-label="Delete" >
                                <FontAwesomeIcon icon={faHeart} />
                              </IconButton>
                          }
                        </div>
                      </Grid>
                    </Grid>

                  </div>

                </div>


                <div className={styles.contentBody}>

                  <Grid container spacing={1} className={styles.specificationContainer} >
                    <Grid item sm={6} xs={12} className={styles.specification}>
                      <Typography variant={'subtitle2'}>
                        <FontAwesomeIcon className={styles.icons} icon={faBriefcase} />
                          Job Type
                        </Typography>
                      <Typography variant={'body1'}>{type}</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12} className={styles.specification}>
                      <Typography variant={'subtitle2'}>
                        <FontAwesomeIcon className={styles.icons} icon={faBriefcase} />
                          Exerience Required
                        </Typography>
                      <Typography variant={'body1'}>{experience_required}</Typography>
                    </Grid >
                    <Grid item sm={6} xs={12} className={styles.specification}>
                      <Typography variant={'subtitle2'}>
                        <FontAwesomeIcon className={styles.icons} icon={faMapMarkerAlt} />
                        Location
                        </Typography>
                      <Typography variant={'body1'}>
                        {
                          city_list?.map((city: string, index: number) =>
                            <span key={index}>
                              {city}
                              {index < city_list.length - 1 ? ', ' : ''}
                            </span>)
                        }
                      </Typography>
                    </Grid>
                    <Grid item sm={6} xs={12} className={styles.specification}>
                      <Typography variant={'subtitle2'}>
                        <FontAwesomeIcon className={styles.icons} icon={faMoneyBill} />
                          Salary
                        </Typography>
                      <Typography variant={'body1'}>{salary_offered}</Typography>
                    </Grid>
                  </Grid>

                  {/* <ul>
          <li><FontAwesomeIcon className={styles.icons} icon={faMapMarkerAlt} />
          {
            city_list?.map((city: string, index: number) =>
            <span key={index}>
            {city}
            {index < city_list.length - 1 ? ', ' : ''}
            </span>)
          }
          </li>
          <li><i className="fa fa-calendar"></i> Last Date <strong> &nbsp;{}</strong></li>
          <li><FontAwesomeIcon className={styles.icons} icon={faBriefcase} /> {experience_required}</li>
          <li><FontAwesomeIcon className={styles.icons} icon={faMoneyBill} /> {salary_offered}</li>
        </ul> */}

                  <div>
                    <Typography variant='subtitle1'>Job Description :</Typography>
                    <p dangerouslySetInnerHTML={{ __html: job_description }} />
                  </div>

                  {/* <CustomButton size='small' title='Apply Now' /> */}
                </div>
              </div >
      }

      <ConfirmBox show={confirmBoxOpen} onConfirm={ApplyForJob} onClose={() => setConfirmBoxOpen(false)} />
    </>
  )
}


