import * as React from 'react';
import InputField from '../Components/TextField.component/TextField.component';
import { Button, Grid, IconButton, } from '@material-ui/core';
import { Routes, StoreToken, Theme, ValidateFields } from '../Services/App.service';
import { UserContext } from '../Context/User.context';
import { Login, VerifyEmail } from '../Services/Api.service';
import { makeStyles } from '@material-ui/styles';
import { faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { FormHead } from '../Components/FormHead.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorBox } from '../Components/ErrorBox.component';
import { AppContext } from '../Context/App.context';

const useStyles = makeStyles({
  checkBox: {
    paddingRight: 5
  },
  lightFont: {
    fontSize: 14,
    color: 'gray'
  }
});

export function OTPVerification(props: any) {

  const [Form, setForm] = React.useState({
    OTP: '',
  });
  const [email, setEmail] = React.useState('devashis.balj@gmail.com');
  const [errorMessages, setErrorMessages]: any = React.useState([]);

  const { PopNavigationRoute, NavigationQueue } = React.useContext(AppContext);
  const { setToken, setUser } = React.useContext(UserContext);

  const history = useHistory();


  // React.useEffect(() => {
  //   setEmail(props.email);
  // }, [props.email])

  let inputRefs: any = [];

  const styles = useStyles();

  const fieldChangeHandler = (field: string, value: any) => {
    setForm(prev => {
      return {
        ...prev,
        [field]: value
      }
    })
  }

  const verifyMail = async (event: any) => {
    event.preventDefault();

    let isAnyError = !Form.OTP;

    // if (1) {
    if (!isAnyError) {
      console.log('Otp request', Form)
      let response = await VerifyEmail({ ...Form, email: email }, 2);
      console.log('Otp response', response)
      if (response?.status == false) {
        setErrorMessages(response?.message);

      } if (response?.status) {
        console.log('navigationQueue', NavigationQueue);
        if (NavigationQueue?.length) {
          let route = PopNavigationRoute();
          console.log('route', route);
          history.replace({
            pathname: route,
            state: history.location.state
          });
        } else {
          history.replace(Routes.Home);
        }
      } else {

        setErrorMessages(['Sorry! \n Something went wrong'], 'error');

      }
    } else {
      ValidateFields([!Form.OTP], inputRefs);
    }
  }



  return (
    <div>

      <form className={'form'} onSubmit={(event: any) => verifyMail(event)} >


        <FormHead
          title={'Verify One Time Password'}
          subtitle={<span>Enter Otp, sent to <span style={{ color: Theme.primary }} >{email}</span></span>} />

        <ErrorBox errors={errorMessages} />

        <Grid className={'inputFieldContainer '} container spacing={2} >

          <Grid item xs={12} >
            <InputField
              ref={(ref: any) => { inputRefs[0] = ref }}
              label='One time password'
              error={Form.OTP === ''}
              isrequired
              icon={faEnvelope}
              type='OTP'
              size={'small'}
              variant={'outlined'}
              errorMessage={'OTP is required'}
              value={Form.OTP}
              onChange={(event: any) => fieldChangeHandler('OTP', event?.target.value)}
            />
          </Grid>


        </Grid>

        <Button
          variant='contained'
          style={{ width: '100%' }}
          disabled={!Form.OTP}
          color='primary'
          type='submit'>Verify</Button>
        {/* </div> */}

        {
          email ?
            <div style={{ display: 'flex', paddingTop: 10, }} >
              <IconButton color={'primary'} style={{ fontSize: 18 }} onClick={() => history.push({
                pathname: Routes.Verification,
                hash: Routes.verificationHashes.email
              })} >
                <FontAwesomeIcon icon={faArrowLeft} />
              </IconButton>
              <span></span>
            </div>
            : null
        }

      </form>

    </div>
  );
}


