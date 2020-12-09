import * as React from 'react';
import { Button, Typography, } from '@material-ui/core';
import { Theme, } from '../Services/App.service';
import { UserContext } from '../Context/User.context';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { Loader } from '../Components/Loader.component/Loader.component';
import { SendConfirmationMail, VerifyEmail } from '../Services/Api.service';
import { AppContext } from '../Context/App.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  wrapper: {
    width: 600,
    maxWidth: '100%',
    padding: 30,
    textAlign: 'center',
    borderRadius: Theme.radius1,
    boxShadow: '2px 2px 8px 0 #ccc',
    '& p': {
      fontSize: 14,
      lineHeight: '24px'
    }
  },
  heading: {

  },
  imageWrapper: {
    width: 100,
    height: 100,
    margin: '0 auto 20px',
    '& img': {
      width: '100%'
    }
  },
  bodyText: {
    padding: '50px 0',
  },
  footer: {
    width: '100%',
    borderTop: '1px solid #ccc',
    paddingTop: 30,
  },
  highlighted: {
    color: Theme.primary,
    cursor: 'pointer'
  },
  closeButton: {
    position: 'absolute',
    width: 35,
    height: 35,
    textAlign: 'center',
    lineHeight: '35px',
    right: 0,
    top: 0,
    color: Theme.fontColor
  }
});

export function MailSent(props: any) {

  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [user, setUser]: any = React.useState({});
  const [userToken, setUserToken]: any = React.useState({});

  const history = useHistory();

  const { openSnackbar } = React.useContext(AppContext);


  React.useEffect(() => {
    if (user !== props?.user) {
      setUser(props?.user);
    }
    if (userToken !== props?.userToken) {
      setUserToken(props?.userToken);
    }
  }, [props?.user, props?.userToken])


  let inputRefs: any = [];

  const styles = useStyles();



  const sendMail = async () => {
    console.log('send mail request', user, userToken)
    setLoading(true);
    let response = await SendConfirmationMail(userToken?.access, user?.id);
    setLoading(false);
    console.log('login response', response)

    if (response?.status == false) {
      openSnackbar(response?.message);

    } if (response?.status) {

      openSnackbar(response?.message, 'success');
    } else {

      openSnackbar(['Sorry! \n Something went wrong'], 'error');

    }
  }

  const IsUserLoggedIn = () => {
    if (user?.id) {

    } else {
      setMessage('Login to verify yourself')
    }
  }


  const renderMailSent = () => {
    return (
      <div className={styles.wrapper}>

        {
          props?.onClose && (
            <div className={styles.closeButton} onClick={props.onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          )
        }

        <div className={styles.imageWrapper}>
          <img src={'/assets/images/mailConfirm.png'} />
        </div>
        <Typography variant={'h5'} className={styles.heading} >Email Confirmation</Typography>
        <Typography className={styles.bodyText}>
          We have sent email to
    <span className={styles.highlighted}> {user?.email} </span>
    to confirm the validity of your email address. After the email follow the link provided to complete your registration
  </Typography>

        <div className={styles.footer}>
          <Typography >If you have not got any email,

    <span onClick={sendMail} className={styles.highlighted}> Resend Email</span>
          </Typography>
        </div>
        {
          loading && (
            <Loader />
          )
        }
      </div>

    )
  }

  const renderMailVerified = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src={'/assets/images/mailVerified.png'} />
        </div>
        <Typography variant={'h5'} className={classNames(styles.heading, styles.highlighted)} >Email has verified</Typography>
        <Typography style={{ fontSize: 18, fontWeight: 400, padding: '30px 0' }}>
          Your Email has been varified successfully.
  </Typography>

        <Button onClick={() => props.history.replace('/')} >Go to homepage</Button>

      </div>

    )
  }



  return (
    <>

      {
        renderMailSent()
        // renderMailVerified()
      }
    </>
  );
}


