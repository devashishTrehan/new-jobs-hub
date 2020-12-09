import { faFacebook, faFacebookF, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faCircle, faEnvelope, faMapMarkerAlt, faPaperPlane, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Routes, Theme, } from '../Services/App.service';

const useStyles = makeStyles({
    fSection: {
        width: '100%',
        backgroundColor: '#1f2732',
    },
    footer: {
        color: '#fff',
        padding: '50px 5% 40px',
        '& h6': {
            textAlign: 'left',
            paddingTop: 15
        },
        '& ul': {
            listStyle: 'none',
            textAlign: 'left',
            marginTop: 35,
            '& a': {
                color: '#ccc',
                textDecoration: 'none'
            }
        },
        '& li': {
            marginBottom: 8,
            cursor: 'pointer',
            '& svg': {
                marginRight: 8,
                fontSize: 8
            },
        },
        '& li *': {
            transition: '.3s',
        },
        '& li:hover>a': {
            color: Theme.primary,

        },
        '& .contact-list': {
            '& li': {
                display: 'flex',
                flexDirection: 'row',
            },
            '& svg': {
                height: '100%',
                margin: '7px 10px 0 0',
                fontSize: 15,
            },
        },
    },
    fAbout: {
        '& img': {
            display: 'block',
            paddingBottom: 20
        },
        '& p': {
            fontSize: 16,
            margin: '10px 0',
            paddingRight: 20,
            textAlign: 'justify'
        }
    },
    fLink: {

    },
    fIndustries: {

    },
    fCities: {
        '& li': {
            width: '50%',
            textAlign: 'left',
            float: 'left',
        }
    },
    smIconWrap: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px 0',
        justifyContent: 'flex-start',
        fontSize: 16,
        '& span': {
            width: 36,
            height: 36,
            backgroundColor: '#fff',
            borderRadius: 36,
            marginRight: 10,
            textAlign: 'center',
            lineHeight: '36px',
            transition: '.3s',
            '& svg': {
                color: '#1f2732',
            },
            '&:hover': {
                backgroundColor: Theme.primary + '33',
                '& svg': {
                    color: Theme.primary,
                }
            }
        },

    },
    copyRight: {
        borderTop: '1px solid #777',
        padding: '10px 0',
        textAlign: 'center',
        fontSize: 13,
        color: '#fff',
        '& p': {
            marginBottom: 5,
            fontSize: 12
        }
    },
    scrollTopButton: {
        zIndex: 999,
        backgroundColor: Theme.primary,
        padding: '5px 6px',
        borderRadius: Theme.radius1,
        right: 20,
        position: 'fixed',
        bottom: 20,
        transition: '.5s',
        opacity: .8,
        color: '#fff',
        '& svg': {
            width: '22px !important',
            height: 22
        },
        '&:hover': {
            opacity: .5,
        }
    },
    subscribeForm: {
        '& div': {
            height: 35,
            display: 'flex',
            width: '100%',
            maxWidth: 230,
            flexDirection: 'row',
        },
        '& input': {
            padding: 5,
            width: 'calc(100% - 35px)',
            borderRadius: 0,
            '&::placeholder': {
                fontSize: 14
            }
        },
        '& span': {
            height: '100%',
            width: 35,
            textAlign: 'center',
            lineHeight: '35px',
            fontSize: 14,
            backgroundColor: Theme.primary,
            color: '#fff',
            '&:hover': {
                opacity: .8,
            },
        },
    }
})

export const CopyRightStrip = (props: any) => {

    const [isOnTop, setIsOnTop] = React.useState(true);


    const styles = useStyles();

    React.useEffect(() => {

        window.onscroll = (event: any) => {

            if (window.pageYOffset > 100) {
                setIsOnTop(false);
            } else {
                setIsOnTop(true);
            }
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className={styles.copyRight} style={{ color: props?.color ? props.color : '#fff' }}>
            <div>
                <p>Preparing for Interview | CV Writing | How to get a Job | Policy</p>
                <p>Copyright 2020. Newjobshub. Designed & Developed by Balj Technology</p>
            </div>
            <span onClick={() => scrollToTop()} className={styles.scrollTopButton} style={{ display: isOnTop ? 'none' : 'unset' }} ><FontAwesomeIcon icon={faAngleUp} /></span>
        </div>
    )

}


export const Footer = (props: any) => {

    const styles = useStyles();
    const history = useHistory();

    React.useEffect(() => {

    }, [])

    const popularCities: any = ['AGRA', 'GOA', 'AJMER ', 'HARIDWAR', 'AURANGABAD ', 'JAIPUR', 'BANGALORE ', 'KOTA', 'CHENNAI', 'LUCKNOW', 'FARIDABAD ', 'MUMBAI', 'GHAZIABAD ', 'NEW DELHI', 'GREATER NOIDA', 'NOIDA',];
    const quickLinks: any = [
        { label: 'About Us', link: Routes.About },
        { label: 'How to get a Job?', link: '' },
        { label: 'New Job Openings', link: '' },
        { label: 'Resume Search', link: '' },
        { label: 'Contact Us', link: Routes.Contact },
    ]
    const popularJobs: any = ['Popular Jobs', 'Accounting Jobs', 'Advertising jobs', 'Banking Jobs', 'Customer Service Jobs', 'Graphic / Web Design Jobs', 'HR/ Industrial Relations Jobs', 'IT-Software Jobs', 'IT Hardware Jobs', 'Teaching / Education Jobs',];
    const contactInfo = {
        number: '9319311003',
        email: 'info@newjobshub.com'
    }

    const renderLink = (label: string, link: string) => {
        return (<li key={label}><Link to={link} onClick={() => { window.scroll(0, 0); }}>
            <FontAwesomeIcon icon={faCircle} />
            {label}
        </Link></li>)
    }




    return (

        <div className={styles.fSection}>
            <footer className={styles.footer}>
                <Grid container spacing={4}>

                    <Grid item md={3} sm={6} xs={12} className={styles.fAbout}>
                        <img src={'assets/images/fLogo.png'} />

                        <p>With our New Jobs Hub, you can search for your dream job online which may take your career to new heights. You can use our exclusive tools to personalise your job search. You will get to add your resume for free, review a company and much more.</p>

                        <div className={styles.smIconWrap}>
                            <span>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </span>

                            <span>
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>

                            <span>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </span>
                        </div>
                    </Grid>

                    <Grid item md={3} sm={6} xs={12} className={styles.fLink}>
                        <Typography variant={'h6'}>Quick Links</Typography>
                        <ul>
                            {
                                quickLinks.map((link: any) => renderLink(link.label, link.link))
                            }
                        </ul>
                    </Grid>

                    <Grid item md={3} sm={6} xs={12} className={styles.fLink}>
                        <Typography variant={'h6'}>Get In Touch</Typography>
                        <div>
                            <ul className={'contact-list'}>
                                <li>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span style={{ display: 'inline-block' }}>
                                        <span>B-48, First floor, Sector-63,</span>
                                        <br />
                                        <span>Noida, U.P., 201301</span>
                                    </span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                    <span><a href={`tel:${contactInfo.number}`}>+91-{contactInfo.number}</a></span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></span>
                                </li>
                            </ul>
                        </div>
                    </Grid>

                    <Grid item md={3} sm={6} xs={12} className={styles.fLink}>
                        <Typography variant={'h6'}>Subscribe</Typography>
                        <div>
                            <ul>
                                <li>
                                    <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi accusantium voluptatibus quis iusto neque distinct</p>
                                </li>
                                <form className={styles.subscribeForm}>
                                    <div>
                                        <input placeholder='Email Address' />
                                        <span>
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </span>
                                    </div>
                                </form>
                            </ul>
                        </div>
                    </Grid>
                </Grid>


            </footer >

            <CopyRightStrip />

        </div>
    )

}