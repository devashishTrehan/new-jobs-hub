import React, { useEffect, useState } from 'react';
import { makeStyles, Snackbar } from '@material-ui/core';
import classNames from 'classnames';
import { Routes, Theme } from '../Services/App.service';
import { Alert, AlertTitle } from '@material-ui/lab';
import { EmailVerification } from './EmailVerification.page';
import { OTPVerification } from './OTPVerification.page';
import { NavBar } from '../Components/Navbar.component';
import { CopyRightStrip } from '../Components/Footer.component';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        height: 'calc(100vh - 100px)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formsWrapper: {
        boxShadow: Theme.boxShadow,
        width: 450,
        maxWidth: 'calc(100% - 20px)',

    },
    cardsWrapper: {
        position: 'relative',
        width: '100%',
        height: 300,
        transition: `transform 1s`,
        overflow: 'hidden',
    },
    upperSection: {
        position: 'relative',
        width: '100%',
        height: 160,
        transition: `transform 1s`,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflow: 'hidden',
        justifyContent: 'center'
    },
    cardFace: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    mailContainer: {
        left: 0,
    },
    otpContainer: {
        left: '100%'
    }
})

const MailVerify = (props: any) => {

    const [isFlipped, setIsFlipped] = useState(false)
    const [snackOpen, setSnackOpen]: any = React.useState(true);
    const [errorMessages, setErrorMessages]: any = React.useState({ errors: [], type: '' });
    const [email, setEmail]: any = React.useState('');


    const styles = useStyles();

    // useEffect(() => {
    //     let hash = props.location.hash;
    //     console.log(hash)
    //     if (hash == `#${Routes.verificationHashes.email}`) {
    //         setSnackOpen(false);
    //         setErrorMessages({ errors: [], type: '' });
    //         setIsFlipped(false);
    //     } else if (hash == `#${Routes.verificationHashes.otp}`) {
    //         setSnackOpen(false);
    //         setErrorMessages({ errors: [], type: '' });
    //         setIsFlipped(true)
    //     }
    // }, [props.location.hash])


    const onMessageRecieved = (errors: any, type: string) => {
        setErrorMessages({ errors: errors, type: type });
        setSnackOpen(true);
    }

    const closeSnakbar = () => {

        setSnackOpen(false);
    }

    return (
        <>
            <NavBar home={true} />

            <div className={classNames('container', styles.container)}>


                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={snackOpen} autoHideDuration={30000} onClose={closeSnakbar}>
                    <Alert onClose={closeSnakbar} severity={errorMessages.type} >
                        <AlertTitle>Errors</AlertTitle>
                        {
                            errorMessages?.errors.map((message: string, index: number) => {
                                return (
                                    <p className={'error'} key={index} style={{ lineHeight: '16px' }}>{message}</p>
                                )
                            })

                        }
                    </Alert>
                </Snackbar>


                <div className={styles.formsWrapper}>

                    <div className={styles.upperSection}>
                        <img src='/assets/bg-images/EmailFormTop.jpg' />
                    </div>

                    <div className={classNames({ [styles.cardsWrapper]: true })}>
                        <div className={classNames(styles.cardFace, styles.mailContainer)}>
                            <EmailVerification onSuccess={(email: string) => setEmail(email)} onMessage={(errors: any, type: string) => onMessageRecieved(errors, type)} />
                        </div>

                        <div className={classNames(styles.cardFace, styles.otpContainer)}>
                            <OTPVerification email={email} onMessage={(errors: any, type: string) => onMessageRecieved(errors, type)} />
                        </div>
                    </div>

                </div>
            </div>

            <CopyRightStrip color={'#000'} />
        </>
    )

}

export default MailVerify;