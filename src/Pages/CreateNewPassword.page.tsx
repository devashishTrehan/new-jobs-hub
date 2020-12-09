import * as React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import InputField from '../Components/TextField.component/TextField.component';
import { Button, Grid, } from '@material-ui/core';
import { ResetPassword} from '../Services/Api.service';
import { ErrorTypes, Routes, ValidateFields } from '../Services/App.service';
import { makeStyles } from '@material-ui/styles';
import { faLock, } from '@fortawesome/free-solid-svg-icons';
import { FormHead } from '../Components/FormHead.component';
import { UserContext } from '../Context/User.context';
import { Loader } from '../Components/Loader.component/Loader.component';
import { ErrorBox } from '../Components/ErrorBox.component';
import FormWrapper from '../Components/FormWrapper.component';
import { AppContext } from '../Context/App.context';

const useStyles = makeStyles({

})

export function CreateNewPassword(props: any) {

  const [Form, setForm] = React.useState({
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [errorMessages, setErrorMessages]: any = React.useState([]);
  const { token } = React.useContext(UserContext);
  const { openSnackbar } = React.useContext(AppContext);

  const styles = useStyles();

  const history = useHistory();
  const location: any = useLocation();

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


  const CreateNewPassword = async (event: any) => {
    event.preventDefault();
    let isAnyError = !Form.password || !Form.confirmPassword;

    if (!isAnyError) {
      // if (1) {
      setLoading(true);

      let response = await ResetPassword(Form, location?.search);

      setLoading(false);

      console.log('reset password response', response)

      if (response?.status == false) {
        if (response?.additional_data?.error_type === ErrorTypes.USER_ALREADY_EXIST) {

          setErrorMessages([response?.message]);

        } else if (props.onMessage) {
          props.onMessage(response?.message, 'error')
        }

      } else if (response?.status) {
        openSnackbar([response.msg], 'success');
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
      ValidateFields([!Form.password, !Form.confirmPassword], inputRefs);
    }
  }

  return (
    <FormWrapper headImage='/assets/bg-images/PasswordFormTop.jpg' >

      <div >
        <form className={'form'} onSubmit={(event: any) => CreateNewPassword(event)} >

          <FormHead title={'Reset Your Password'} />
          <ErrorBox errors={errorMessages} />

          <Grid className={'inputFieldContainer '} container spacing={2} >

            <Grid item xs={12} >
              <InputField
                ref={(ref: any) => inputRefs[0] = ref}
                label='New Password'
                error={Form.password === ''}
                isrequired type='password'
                icon={faLock}
                size={'small'}
                color='primary'
                variant={'outlined'}
                errorMessage='New Password is required'
                value={Form.password}
                onChange={(event: any) => fieldChangeHandler('password', event?.target.value)} />
            </Grid>

            <Grid item xs={12} >
              <InputField
                ref={(ref: any) => inputRefs[1] = ref}
                label='Confirm New Password'
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
            disabled={!Form.password || !Form.confirmPassword}
            color='primary'
            type='submit'>Reset</Button>


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
    </FormWrapper>
  );
}
