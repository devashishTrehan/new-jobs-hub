import * as React from 'react';
import InputField from '../Components/TextField.component/TextField.component';
import { Button, Checkbox, Grid } from '@material-ui/core';
import { Routes, StoreToken, ValidateFields } from '../Services/App.service';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../Context/User.context';
import { Login } from '../Services/Api.service';
import { makeStyles } from '@material-ui/styles';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FormHead } from '../Components/FormHead.component';
import { Loader } from '../Components/Loader.component/Loader.component';
import { ErrorBox } from '../Components/ErrorBox.component';
import { AppContext } from '../Context/App.context';

const useStyles = makeStyles({
  checkBox: {
    paddingLeft: 0,
  },
  lightFont: {
    fontSize: 14,
    color: 'gray'
  }
});

export function LoginPage(props: any) {

  const [Form, setForm] = React.useState({
    email: '',
    password: '',
    toRemember: true
  });
  const [loading, setLoading] = React.useState(false);
  const [errorMessages, setErrorMessages]: any = React.useState([]);

  const { setUser, setToken, token, showUnverifyStrip } = React.useContext(UserContext);
  const { PopNavigationRoute, NavigationQueue } = React.useContext(AppContext);

  const history = useHistory();


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

  const login = async (event: any) => {
    event.preventDefault();
    let isAnyError = !Form.email || !Form.password;
    // if (1) {
    if (!isAnyError) {

      setLoading(true);
      console.log('login request', Form)

      let response = await Login(Form);

      setLoading(false);
      console.log('login response', response)

      if (response?.status == false) {
        if (props.onMessage) {
          props.onMessage(response?.message, 'error')
        }
      }
      if (response?.status) {
        if (Form.toRemember) {
          StoreToken(response.additional_data);
        }
        let tokens = response.additional_data;
        setToken(tokens);
        const responseData = response.data;
        let newUser = {
          id: responseData?.id,
          slug: responseData?.profile_slug,
          isVerified: Boolean(responseData?.is_verified),
          profilePicture: responseData?.profile_picture,
          full_name: responseData.full_name,
          email: responseData.email,
        };
        setUser(newUser, Form.toRemember);
        showUnverifyStrip(tokens, newUser);
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
      } else if (response?.statusCode === 401) {

        setErrorMessages(['Email or password is incorrect !']);

      } else {
        if (props.onMessage) {
          props.onMessage(['Sorry! \n Something went wrong'], 'error')

        }
      }
    } else {
      ValidateFields([!Form.email, !Form.password], inputRefs);
    }
  }



  return (
    <div>
      <div>
        <form className={'form'} onSubmit={(event: any) => login(event)} >

          <FormHead headImage title={'Hey, good to see You again!'} subtitle={'Log In to get going'} />

          <ErrorBox errors={errorMessages} />

          <Grid className={'inputFieldContainer '} container spacing={2} >

            <Grid item xs={12} >
              <InputField
                ref={(ref: any) => { inputRefs[0] = ref }}
                label='Email'
                error={Form.email === ''}
                isrequired
                icon={faEnvelope}
                type='email'
                color='primary'
                size={'small'}
                variant={'outlined'}
                errorMessage={'Email is required'}
                value={Form.email}
                onChange={(event: any) => fieldChangeHandler('email', event?.target.value)}
              />
            </Grid>



            <Grid item xs={12} >
              <InputField
                ref={(ref: any) => { inputRefs[1] = ref }}
                label='Password'
                error={Form.password === ''}
                isrequired
                variant={'outlined'}
                icon={faLock}
                size={'small'}
                type='password'
                color='primary'
                errorMessage={'Password is required'}
                value={Form.password}
                onChange={(event: any) => fieldChangeHandler('password', event?.target.value)}
              />
            </Grid>

            <Grid item xs={6} style={{ textAlign: 'left', verticalAlign: 'middle' }}>
              <div>
                <Checkbox color='primary' className={styles.checkBox} checked={Form.toRemember} onChange={(event) => fieldChangeHandler('toRemember', event.target.checked)} />
                <label>Remember me</label>
              </div>
            </Grid>
            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Link to={{
                pathname: Routes.Verification,
                // hash: Routes.verificationHashes.email
              }} >Forget password?</Link>
            </Grid>

          </Grid>

          <Button
            variant='contained'
            style={{ width: '100%' }}
            disabled={!Form.email || !Form.password}
            color='primary'
            type='submit'>Log In</Button>
          {/* </div> */}
        </form>

        <p>
          <span>Do not have an account? </span>
          <span>
            <Link replace={true} to={{
              pathname: Routes.User,
              hash: Routes.SignInHashes.new
            }}>
              Register
        </Link>
          </span>
        </p>
      </div>
      {
        loading && (
          <Loader />
        )
      }
    </div>
  );
}


