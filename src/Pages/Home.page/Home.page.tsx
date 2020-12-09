import { faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, createMuiTheme, Grid, Hidden, MuiThemeProvider, responsiveFontSizes, Tab, Tabs, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { Link, useHistory } from 'react-router-dom';
import * as React from 'react';
import classNames from 'classnames';
import { Search } from '../../Components/Search.component';
import { Footer } from '../../Components/Footer.component';
import { NavBar } from '../../Components/Navbar.component';
import { BrowseTabStyles, ContentCardStyles, HeaderStyles, StatStyles } from './Home.css';
import { Counter } from '../../Components/Counter.component';
import { AnimatedSection } from '../../Components/AnimatedView.component';
import { Routes } from '../../Services/App.service';


let pageContentRef: any = React.createRef();


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  className: any;
}


const pulseEffect = () => {
  return (
    <div className="pulse">
      <span ></span>
      <span ></span>
      <span ></span>
      <span ></span>
      <span ></span>

      <img src='assets/bg-images/device-mockup.png' />
    </div>
  )
}

const Header = () => {

  const styles = HeaderStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const history = useHistory();

  const scrollTo = () => {
    pageContentRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <Grid container className={styles.HeadWrapper} >
      <Grid item className={styles.headLeftContainer} xs={12} md={8}>

        <div className={classNames(styles.HeadContainer, { [styles.HeadContainer_S]: isMobile })} >
          <Typography variant='h3' >Fastest growing job portal...</Typography>
          <div style={{ display: 'inline-block' }}>
            <Typography variant='h3' style={{ fontWeight: 900 }} >Direction towards growth!</Typography>
          </div>
        </div>

        <Search />

        <div className={styles.userTypeWrap}>
          <Grid container spacing={2} >

            <Grid className={styles.userTypeItem} item sm={6} xs={12} onClick={() => history.push({
              pathname: Routes.Jobs + Routes.JobList,
            })} >
              <Grid container spacing={2} alignItems='center'  >
                <Grid item xs={3} sm={4} >
                  <div className={styles.imageWrap}
                    style={{
                      backgroundImage: `url('${process.env.PUBLIC_URL}/assets/bg-images/usertype-1.png')`
                    }}>
                    <img className={styles.userTypeImage} src='assets/bg-images/usertype-2-addon.png' />
                  </div>

                </Grid>
                <Grid item xs={9} sm={8}>
                  <div>
                    <Typography variant='h6' className={styles.userTypeHead} >I'm looking for a job</Typography>
                    <Typography color='primary'>Post CV and apply job you love</Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid className={styles.userTypeItem} item sm={6} xs={12}>
              <Grid container spacing={2} alignItems='center' >
                <Hidden xsDown >
                  <Grid item xs={3} sm={4} >
                    <div className={styles.imageWrap}
                      style={{
                        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/bg-images/usertype-2.png')`
                      }}>
                      <img className={styles.userTypeImage} src='assets/bg-images/usertype-1-addon.png' />
                    </div>
                  </Grid>
                </Hidden>

                <Grid item xs={9} sm={8}>
                  <div style={{ textAlign: isMobile ? 'right' : 'left' }}>
                    <Typography variant='h6' className={styles.userTypeHead} >I want to post job</Typography>
                    <Typography color='primary' >Post job and hire professionals</Typography>
                  </div>
                </Grid>

                <Hidden smUp >
                  <Grid item xs={3} sm={4} >
                    <div className={styles.imageWrap}
                      style={{
                        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/bg-images/usertype-2.png')`
                      }}>
                      <img className={styles.userTypeImage} src='assets/bg-images/usertype-1-addon.png' />
                    </div>
                  </Grid>
                </Hidden>

              </Grid>
            </Grid>

          </Grid>
        </div>

      </Grid>

      <Hidden mdDown>
        <Grid item className={styles.banner2} md={4}>
        </Grid>
      </Hidden>

      <div className={classNames(styles.downButton)} onClick={() => scrollTo()}>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>

    </Grid>
  )

}


const ContentCards = () => {

  const cardLists = {
    list1: [
      'Sign Up for free quickly',
      'Post your updated resume',
      'Get connected with top employers'
    ],
    list2: [
      'Sign Up for free within no time',
      'Post your job for free',
      'Reach out to the most suitable candidate'
    ],
    list3: [
      'Login to your profile- As a Job Seeker/ As an Employer',
      'Use relevant filters',
      'Get personalized updates and save your time'
    ],
  }

  const styles = ContentCardStyles();

  const renderCard = (text: string, index: number, alignment: string = 'right') => {

    // const { text } = item;

    return (
      <Grid className={classNames({ [styles.cardItemWrap]: true, [styles.contentRight]: alignment !== 'right' })} container>
        <Grid className={styles.cardItemIcon} item>
          <FontAwesomeIcon icon={faCheck} />
        </Grid>
        <Grid item className={styles.cardItemText} >
          <p>{text}</p>
        </Grid>
      </Grid>
    )

  }

  return (
    <div ref={ref => pageContentRef = ref} className={styles.pageContent} id='pageContent'>

      <AnimatedSection id={'Content-1'} animationClass={'shiftUp'}>
        <Typography variant='body1' style={{ fontSize: 20, fontWeight: 400, letterSpacing: .5 }} >New Job Hub is the leading career destination for tech experts at every stage of their careers</Typography>
      </AnimatedSection>

      <div className={styles.cardsWrapper}>

        <Grid container className={styles.cardContainer} spacing={5} >
          <Grid item sm={6} className={styles.cardItemWrap2} >
            <AnimatedSection id={'1'} animationClass={'left'} >
              <Typography variant={'h3'} className={styles.cardHead} >GET A PERFECT JOB FOR YOURSELF </Typography>
              <Typography variant={'h6'} >Stay connected with us for the latest job opportunities matching your profile. Share with us what kind of job you are looking for and we will connect you with the relevant employer.</Typography>
            </AnimatedSection>
          </Grid>

          <Grid item sm={6} className={styles.cardItemWrap2}>
            <AnimatedSection id={'2'} animationClass={'right'} >
              <img className={styles.imageRight} src='assets/bg-images/card1image.png' />
              {/* <video className={styles.imageRight} src='assets/bg-images/card1video.webm' autoPlay={true} muted loop={true} /> */}
            </AnimatedSection>
          </Grid>
        </Grid>

        <Grid container className={styles.cardContainer} spacing={5} >

          <Hidden xsDown>
            <Grid item sm={6} className={styles.cardItemWrap2}>
              <AnimatedSection id={'3'} animationClass={'left'} >
                <img src='assets/bg-images/card2image.png' />
              </AnimatedSection>
            </Grid>
          </Hidden>

          <Grid item sm={6} className={styles.cardItemWrap2}>
            <AnimatedSection id={'4'} animationClass={'right'} >
              <Typography variant={'h3'} className={styles.cardHead}>HIRE GREAT TALENT FASTER</Typography>
              <Typography variant={'h6'} >Hire the best candidate easily. Post your job update and we will help you get a number of applications from finest & deserving jobseekers.</Typography>
            </AnimatedSection>
          </Grid>

          <Hidden smUp>
            <Grid item sm={6} className={styles.cardItemWrap2}>
              <AnimatedSection id={'5'} animationClass={'left'} >
                <img src='assets/bg-images/card2image.png' />
              </AnimatedSection>
            </Grid>
          </Hidden>

        </Grid>


        <Grid container className={styles.cardContainer} spacing={5} >
          <Grid item sm={6} className={styles.cardItemWrap2}>
            <AnimatedSection id={'6'} animationClass={'left'} >
              <Typography variant={'h3'} className={styles.cardHead}>PERSONALIZE YOUR SEARCH RESULTS</Typography>
              <Typography variant={'h6'} >Use our data tools to access personalized search results suiting to your requirements only.</Typography>
            </AnimatedSection>
          </Grid>
          <Grid item sm={6} className={styles.cardItemWrap2}>
            <AnimatedSection id={'7'} animationClass={'right'} >
              <img className={styles.imageRight} src='assets/bg-images/card3image.png' />
            </AnimatedSection>
          </Grid>
        </Grid>
      </div>

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', margin: '20px 0', alignItems: 'center' }}>
        <div style={{ position: 'absolute', width: '80%', height: 2, backgroundColor: '#ccc' }} ></div>
        <div style={{ position: 'absolute', padding: 10, backgroundColor: '#fff', }}>
          <Button variant='contained' size='large' color='primary'>Get Started For Free</Button>
        </div>
      </div>

    </div>
  )
}


const BrowseSection = () => {

  const [tabIndex, setTabIndex] = React.useState(0);
  const isMobile = useMediaQuery('(max-width:767px)');

  const BrowseJobsData: any = {
    title: ['Project Manager', 'Data Analyst', 'DBA', 'Scrum Master', 'Web Developer', 'Product Manager', 'Full Stack Developer', 'Android Developer', 'Program Manager', 'SQL Developer', 'Frontend Developer', 'Network Engineer', 'Systems Administrator', 'Solution Architect', '.Net Developer', 'PHP Developer', 'Python Developer', 'Mobile Developer', 'Linux Administrator'],
    skill: ['Project Manager', 'Data Analyst', 'DBA', 'Scrum Master', 'Web Developer', 'Product Manager', 'Full Stack Developer', 'Android Developer', 'Program Manager', 'SQL Developer', 'Frontend Developer', 'Network Engineer', 'Systems Administrator', 'Solution Architect', 'DevOps Engineer', 'Game Developer', 'Network Administrator', 'Salesforce Developer', 'Backend Developer',],
    cities: ['AGRA', 'GOA', 'AJMER ', 'HARIDWAR', 'AURANGABAD ', 'JAIPUR', 'BANGALORE ', 'KOTA', 'CHENNAI', 'LUCKNOW', 'FARIDABAD ', 'MUMBAI', 'GHAZIABAD ', 'NEW DELHI', 'GREATER NOIDA', 'NOIDA',],
    category: ['Project Manager', 'Android Developer', 'Program Manager', 'SQL Developer', 'Frontend Developer', 'Network Engineer', 'Systems Administrator', 'Solution Architect', 'DevOps Engineer', 'Game Developer', 'Network Administrator', 'Salesforce Developer', 'Backend Developer', 'Machine Learning Engineer', '.Net Developer', 'PHP Developer', 'Python Developer', 'Mobile Developer', 'Linux Administrator'],
    popular: ['Android Developer', 'Program Manager', 'SQL Developer', 'Frontend Developer', 'Network Engineer', 'Systems Administrator', 'Solution Architect', 'DevOps Engineer', 'Game Developer', 'Network Administrator', 'Salesforce Developer', 'Backend Developer', 'Machine Learning Engineer', '.Net Developer', 'PHP Developer', 'Python Developer', 'Mobile Developer', 'Linux Administrator'],
  }

  const BrowseJobsCategories = Object.keys(BrowseJobsData);

  const styles = BrowseTabStyles();

  const handleTabChange = (event: any, newValue: number) => {
    setTabIndex(newValue);
  };


  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        {...other}
      >
        {value === index && (
          children
        )}
      </div>
    );
  }

  function TabProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (

    <div className={classNames(styles.mainContainer)}>

      <AnimatedSection id={'browse-1'} animationClass={'shiftUp'}>
        <Typography variant='h4' align='left'  >BROWSE JOBS</Typography>
      </AnimatedSection>

      <AnimatedSection id={'browse-2'} animationClass={'shiftUp'}>
        <div className={styles.tabsContainer} >
          <Tabs
            textColor={'inherit'}
            indicatorColor='primary'
            value={tabIndex}
            variant='scrollable'
            scrollButtons='auto'
            onChange={handleTabChange}
            aria-label="simple tabs example">

            <Tab className={styles.tab} label="By Title" {...TabProps(0)} />
            <Tab className={styles.tab} label="By Skill" {...TabProps(1)} />
            <Tab className={styles.tab} label="By City" {...TabProps(4)} />
            <Tab className={styles.tab} label="By Category" {...TabProps(2)} />
            <Tab className={styles.tab} label="Popular Searches" {...TabProps(3)} />
          </Tabs>

          {
            BrowseJobsCategories.map((category, index) => {
              return (
                <TabPanel key={index} className={styles.browseWrap} value={tabIndex} index={index}>
                  <ul>
                    {
                      BrowseJobsData[category].map((item: string, _index: number) => {
                        return (
                          <li key={_index} style={{ width: isMobile ? '50%' : '25%' }}><Link to={{
                            pathname: Routes.Jobs + Routes.JobList,
                            state: category === 'cities' ?
                              { keyword: '', location: item }
                              : { keyword: item, location: '' }
                          }} >{item}</Link></li>
                        )
                      })
                    }
                  </ul>

                </TabPanel>
              )
            })
          }

        </div>
      </AnimatedSection>
    </div>
  )
}


const StatSection = () => {

  const [stats, setStats] = React.useState({});

  const styles = StatStyles();

  return (
    <div className={styles.statsBackground}>
      {/* <img src='assets/bg-images/stats-bg.jpg' /> */}
      {/* <div className={styles.statsBacgroundOverlay} ></div> */}
      <div className={styles.statsContainer}>
        <Grid container spacing={4}>

          <Hidden smDown>
            <Grid className={styles.deviceMockupWrap} item md={5}>
              <div >
                {
                  pulseEffect()
                }
              </div>
            </Grid>
          </Hidden>
          <Grid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} item xs={12} md={7}>
            <Typography variant={'h4'} style={{ paddingBottom: 20, lineHeight: '35px' }} >Our Success & Award</Typography>
            <div className={'clearfix'}></div>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}><p><Counter end={4250} id='stat-1' duration={100} steps={5} /></p><p>Job Posted</p></Grid>
              <Grid item xs={6} md={3}><p><Counter end={1742} id='stat-2' duration={100} steps={5} /></p><p>Candidates</p></Grid>
              <Grid item xs={6} md={3}><p><Counter end={450} id='stat-3' duration={100} steps={2} /></p><p>Companies</p></Grid>
              <Grid item xs={6} md={3}><p><Counter end={300} id='stat-4' duration={100} steps={2} />+</p><p>Happy Clients</p></Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )

}

export function Home(props: any) {


  const getHomePageData = () => {

  }



  let theme = createMuiTheme(useTheme());
  theme = responsiveFontSizes(theme);
  let inputRefs: any = [];

  React.useEffect(() => {
  }, [])


  return (
    <MuiThemeProvider theme={theme}>

      <div>
        <NavBar home={true} />

        <Header />

        <ContentCards />

        <BrowseSection />

        <StatSection />

        <Footer />

      </div>

    </MuiThemeProvider>
  );
}
