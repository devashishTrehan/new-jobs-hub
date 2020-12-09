import * as React from 'react';
import InputField from '../Components/TextField.component/TextField.component';
import { Button, Grid, } from '@material-ui/core';
import { Routes, ValidateFields } from '../Services/App.service';
import { UserContext } from '../Context/User.context';
import { makeStyles } from '@material-ui/styles';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FormHead } from '../Components/FormHead.component';
import { VerifyEmail } from '../Services/Api.service';
import { ErrorBox } from '../Components/ErrorBox.component';
import { Loader } from '../Components/Loader.component/Loader.component';
import { AppContext } from '../Context/App.context';
import { MailSent } from './MailSent.page';

const useStyles = makeStyles({
  checkBox: {
    paddingRight: 5
  },
  lightFont: {
    fontSize: 14,
    color: 'gray'
  },
  formWrap: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg-images/EmailFormBottom.png)`,
    backgroundSize: '100%',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    paddingTop: 20
  }
});

export function EmailVerification(props: any) {

  const [Form, setForm] = React.useState({
    email: '',
  });
  const [errorMessages, setErrorMessages]: any = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const history = useHistory();
  const location: any = useLocation();

  const { user, token } = React.useContext(UserContext);
  const { openSnackbar, hideModal, showModal } = React.useContext(AppContext);

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
    let isAnyError = !Form.email;
    console.log({ ...location?.state, email: Form.email })
    if (!isAnyError) {
      console.log('email verification request', Form)
      setLoading(true);
      let response = await VerifyEmail(Form);
      setLoading(false);
      console.log('email verification response', response)

      // devshish.bal@gmail.com

      if (response?.status === false) {
        console.log('in error block')
        setErrorMessages(response?.message);

      } else if (response?.status) {
        openSnackbar(response?.message, 'success');
        fieldChangeHandler('email', '');
        // history.replace({
        //   pathname: Routes.MailSent,
        //   state: { ...location?.state, email: Form.email }
        // });
        showModal(<MailSent user={user} userToken={token} onClose={() => hideModal()} />)

      } else {

        setErrorMessages(['Sorry! \n Something went wrong'], 'error');

      }
    } else {
      ValidateFields([!Form.email], inputRefs);
    }
  }

  const navigateTo = () => {
    props.onSuccess(Form.email);
    history.push({
      pathname: Routes.Verification,
      hash: Routes.verificationHashes.otp
    })
  }



  return (
    <div className={styles.formWrap}>

      <form className={'form'} onSubmit={(event: any) => verifyMail(event)} >

        <FormHead title={'Verify your Email Address'} />

        <ErrorBox errors={errorMessages} />

        <Grid className={'inputFieldContainer '} container spacing={2} >

          <Grid item xs={12} >
            <InputField
              ref={(ref: any) => { inputRefs[0] = ref }}
              label='Email'
              error={Form.email === ''}
              isrequired
              color={'primary'}
              icon={faEnvelope}
              type='email'
              size={'small'}
              variant={'outlined'}
              errorMessage={'Email is required'}
              value={Form.email}
              onChange={(event: any) => fieldChangeHandler('email', event?.target.value)}
            />
          </Grid>


        </Grid>

        <Button
          variant='contained'
          style={{ width: '100%' }}
          disabled={!Form.email}
          color='primary'
          type='submit'>Verify</Button>
        {/* </div> */}
      </form>

      {
        loading && (
          <Loader />
        )
      }

    </div>
  );
}


