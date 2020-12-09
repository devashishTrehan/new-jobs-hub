import * as React from 'react';
import { Loader } from '../Components/Loader.component/Loader.component';
import { makeStyles } from '@material-ui/core/styles';
import { GetJobList, GetSearchedJobList } from '../Services/Api.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ClassNames from 'classnames';
import { JobDetail } from './JobDetail.page';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import { JobStatusList, Routes, Theme } from '../Services/App.service';
import { JobStatusListComponent } from '../Components/JobStatusList.component';
import { Chip, Grid, useMediaQuery } from '@material-ui/core';
import classNames from 'classnames';
import { CopyRightStrip } from '../Components/Footer.component';
import { NavBar } from '../Components/Navbar.component';
import { UserContext } from '../Context/User.context';
import { SomethingWentWrong } from '../Components/SomethingWrong.component';
import { NoResult } from '../Components/NoResult.component';
import { JobListContext } from '../Context/JobList.context';

const drawerWidth = 240;

const useStyles = makeStyles({
  pageWrap: {
    padding: '0 calc(5% - 20px)',
    '& .fill': {
      margin: '20px',
      width: 'calc(100% - 40px)'
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '20px 0'
  },
  jobListWrapper: {
    margin: '20px',
    width: 'calc(100% - 40px)',
  },
  jobContainer: {
    padding: '0 20px',
    textAlign: 'left',
    width: '100%',
    height: 'auto',
  },
  jobContainer_L: {
    maxHeight: 'calc(100vh - 180px)',
    overflowY: 'scroll',
  },
  jobCard: {
    border: '1px solid #ccc8',
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    '& h5': {
      margin: 0,
    },
    '& p': {
      margin: 0
    }
    // width:'100%'
  },
  selectedJob: {
    boxShadow: '4px 4px 10px 0px #ccc9',
    borderColor: Theme.primary + '88'
  },
  body: {
    textAlign: 'left'
  },
  footerUl: {
    listStyle: 'none',
    padding: 0,
    '&>li': {
      textAlign: 'start'
    }
  },
  icons: {
    color: Theme.secondary,
    marginRight: 10
  },
  logo: {
    margin: '0 10px 0 0'
  },
  logo_S: {
    width: 65,
    height: 65,
  },
  logo_L: {
    width: 100,
    height: 100,
  }
});


export function UserJobsList(props: any) {


  const [currentJob, setCurrentJob] = React.useState('');
  const { token } = React.useContext(UserContext);
  const { _UserJobList, message, loading, getUserJobList } = React.useContext(JobListContext);
  const isMobile = useMediaQuery('(max-width:767px');

  let isDesktop = useMediaQuery('(min-width:960px)');

  const history = useHistory();


  const _getUserJobList = async (status: string) => {
    getUserJobList(status);
  }

  const ChangeStatus = (status: string) => {
    history.push(Routes.Jobs + Routes._UserJobsRoute + `/${status}`)
  }


  React.useEffect(() => {
    console.log(props.match.params);
    let status = props.match.params?.status;
    if (status) {
      _getUserJobList(status);
    }
  }, [props.match.params])

  React.useEffect(() => {

    let currentPath = props.location.pathname.split('/');
    console.log('pages', currentPath);
    if (currentPath[3]) {
      setCurrentJob(currentPath[3]);
    } else {
      setCurrentJob('');
    }

  }, [props.location.pathname])


  const styles = useStyles();
  const { path, url } = useRouteMatch();


  const ShowJob = (slug: string, _isDesktop: boolean = isDesktop) => {
    if (currentJob !== slug) {
      window.scrollTo(0, 0);
      // setCurrentJob(slug);
      props.history.push(`${Routes.Jobs}${Routes._JobDetailRoute}/${slug}`);
    }
  }


  const renderJob = (data: any) => {
    const {
      id,
      job_title_name,
      time_difference,
      experience_required,
      company_name,
      city_list,
      slug,
      company_logo,
      is_saved,
      application_status

    } = data;

    const defaultLogo = '/assets/bg-images/companyDefault.png';


    return (

      <Grid item xs={12} md={6}>

        <div className={classNames({ [styles.jobCard]: true, [styles.selectedJob]: currentJob === slug })} key={id} onClick={() => ShowJob(slug)}>

          <div>
            <img className={classNames(styles.logo, isMobile ? styles.logo_S : styles.logo_L)} src={company_logo ? company_logo : defaultLogo} alt='company_logo' />
          </div>

          <div className={styles.body}>

            <h5 >{job_title_name}</h5>

            <p>{company_name}</p>


            <div className="">
              <ul className={styles.footerUl}>
                <li><FontAwesomeIcon className={styles.icons} icon={faMapMarkerAlt} />
                  {
                    city_list?.map((city: string, index: number) =>
                      <span key={index}>
                        {city}
                        {index < city_list.length - 1 ? ', ' : ''}
                      </span>)
                  }
                </li>
                <li><FontAwesomeIcon className={styles.icons} icon={faBriefcase} /> {experience_required}</li>
              </ul>
            </div>
            <span>
              {time_difference}
              <span className={'dotSeparator'} >.</span>
              <span className={'highlighted'} >
                {
                  application_status && application_status !== JobStatusList.NotAvailable ?
                    <span>{application_status} </span>
                    : <span>Apply Now</span>
                }
                {
                  is_saved && (<span>& Saved</span>)
                }
              </span>
            </span>
          </div>
        </div>
      </Grid>
    )
  }

  const containerClass = ClassNames(styles.jobContainer, { [styles.jobContainer_L]: isDesktop })

  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }} >
      <NavBar home={true} rightContainerStyle={{ padding: '0 30px', flexGrow: 1 }} />

      <div className={styles.pageWrap}>

        <JobStatusListComponent onClick={(status: string) => ChangeStatus(status)} />
        {console.log('user job list', _UserJobList)}
        {

          loading ? <div className={'fill'}>
            <Loader />
          </div>
            : <div className={styles.jobListWrapper} >
              {
                message && (_UserJobList === null) ? <SomethingWentWrong message={message} />

                  : message && !_UserJobList?.length ? <NoResult message={message} />

                    :
                    <Grid container spacing={2} >

                      {
                        _UserJobList?.map((job: any) => renderJob(job))
                      }
                    </Grid>
              }
            </div >
        }
      </div>

      <div className={'clearfix'}></div>
      <CopyRightStrip color={'#000'} />
    </div >
  )

}