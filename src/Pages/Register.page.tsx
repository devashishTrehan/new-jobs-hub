import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputField from '../Components/TextField.component/TextField.component';
import { Button, Grid, } from '@material-ui/core';
import { Register } from '../Services/Api.service';
import { ErrorTypes, Routes, ValidateFields, RecaptchaKeys } from '../Services/App.service';
import { makeStyles } from '@material-ui/styles';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FormHead } from '../Components/FormHead.component';
import { UserContext } from '../Context/User.context';
import { Loader } from '../Components/Loader.component/Loader.component';
import { ErrorBox } from '../Components/ErrorBox.component';
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-v3';

const useStyles = makeStyles({

})

export function RegisterPage(props: any) {

  const [Form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [errorMessages, setErrorMessages]: any = React.useState([]);
  const { token } = React.useContext(UserContext);

  const styles = useStyles();

  const history = useHistory();

  let inputRefs: any = [];
  let ReCaptchaRef: any = React.createRef();


  const fieldChangeHandler = (field: string, value: any) => {
    setForm(prev => {
      return {
        ...prev,
        [field]: value
      }
    })
  }

  // React.useEffect(() => {
  //   loadReCaptcha(RecaptchaKeys.site_key);
  // }, [])

  const CaptchaVerify = (response: any) => {
    console.log('recaptcha verify response', response);
  }


  const register = async (event: any) => {
    event.preventDefault();
    let isAnyError = !Form.firstName || !Form.lastName || !Form.email || !Form.password || !Form.confirmPassword;

    if (!isAnyError) {
      // if (1) {
      setLoading(true);

      let response = await Register(Form);

      setLoading(false);

      console.log('register response', response)

      if (response?.status == false) {
        if (response?.additional_data?.error_type === ErrorTypes.USER_ALREADY_EXIST) {

          setErrorMessages([response?.message]);

        } else if (props.onMessage) {
          props.onMessage(response?.message, 'error')
        }

      } else if (response?.status) {
        history.replace({
          pathname: Routes.User,
          hash: Routes.SignInHashes.exist
        });
      } else {
        if (props.onMessage) {
          props.onMessage(['Sorry! \n Something went wrong'], 'error')
        }
      }
    } else {
      ValidateFields([!Form.firstName, !Form.lastName, !Form.email, !Form.password, !Form.confirmPassword], inputRefs);
    }
  }

  return (
    // <Grid  md={6}>
    <div >
      <form className={'form'} onSubmit={(event: any) => register(event)} >

        <FormHead headImage title={'Register Yourself'} />

        <ErrorBox errors={errorMessages} />

        <Grid className={'inputFieldContainer '} container spacing={2} >


          <Grid item xs={12} >
            <InputField
              ref={(ref: any) => { inputRefs[0] = ref }}
              label='First name'
              error={Form.firstName === ''}
              errorMessage='First name is required'
              isrequired
              size={'small'}
              icon={faUser}
              color='primary'
              variant={'outlined'}
              value={Form.firstName}
              onChange={(event: any) => fieldChangeHandler('firstName', event?.target.value)} />
          </Grid>

          <Grid item xs={12} >
            <InputField
              ref={(ref: any) => { inputRefs[1] = ref }}
              label='Last name'
              error={Form.lastName === ''}
              errorMessage='Last name is required'
              isrequired
              icon={faUser}
              color='primary'
              size={'small'}
              variant={'outlined'}
              value={Form.lastName}
              onChange={(event: any) => fieldChangeHandler('lastName', event?.target.value)} />
          </Grid>

          <Grid item xs={12} >
            <InputField
              ref={(ref: any) => inputRefs[2] = ref}
              label='Email'
              error={Form.email === ''}
              errorMessage='Email is required'
              icon={faEnvelope}
              isrequired 
              type='email'
              color='primary'
              size={'small'}
              variant={'outlined'}
              value={Form.email}
              onChange={(event: any) => fieldChangeHandler('email', event?.target.value)} />
          </Grid>

          <Grid item xs={12} >
            <InputField
              ref={(ref: any) => inputRefs[3] = ref}
              label='Password'
              error={Form.password === ''}
              isrequired type='password'
              icon={faLock}
              size={'small'}
              color='primary'
              variant={'outlined'}
              errorMessage='Password is required'
              value={Form.password}
              onChange={(event: any) => fieldChangeHandler('password', event?.target.value)} />
          </Grid>

          <Grid item xs={12} >
            <InputField
              ref={(ref: any) => inputRefs[4] = ref}
              label='Confirm Password'
              error={Form.password !== Form.confirmPassword}
              errorMessage='Passwords does not match'
              icon={faLock}
              isrequired type='password'
              size={'small'}
              color='primary'
              variant={'outlined'}
              value={Form.confirmPassword}
              onChange={(event: any) => fieldChangeHandler('confirmPassword', event?.target.value)} />
          </Grid>

        </Grid>

        {/* <ReCaptcha
          ref={(ref: any) => ReCaptchaRef = ref}
          sitekey="your_site_key"
          action='action_name'
          verifyCallback={CaptchaVerify}
        /> */}

        <Button
          variant='contained'
          style={{ width: '100%' }}
          disabled={!Form.firstName || !Form.lastName || !Form.email || !Form.password || !Form.confirmPassword}
          color='primary'
          type='submit'>Register</Button>


      </form>

      <p>
        <span>Have an account? </span>
        <span>
          <Link replace={true} to={{
            pathname: Routes.User,
            hash: Routes.SignInHashes.exist
          }}>
            Log In
        </Link>
        </span>
      </p>
      {
        loading && (
          <Loader />
        )
      }
    </div>
    // </Grid>
  );
}
