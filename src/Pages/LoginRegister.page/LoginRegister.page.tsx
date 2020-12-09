import React, { useEffect, useState } from 'react';
import { LoginPage } from "../Login.page"
import { RegisterPage } from "../Register.page"
import { Hidden, makeStyles, Snackbar } from '@material-ui/core';
import classNames from 'classnames';
import { Routes, Theme } from '../../Services/App.service';
import { Alert, AlertTitle } from '@material-ui/lab';
import './LoginRegister.page.css';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../../Components/Navbar.component';
import { CopyRightStrip } from '../../Components/Footer.component';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: 500,
    },

})

const LoginRegisterPage = (props: any) => {

    const [isFlipped, setIsFlipped] = useState(false)
    const [snackOpen, setSnackOpen]: any = React.useState(false);
    const [errorMessages, setErrorMessages]: any = React.useState({ errors: [], type: '' });


    const styles = useStyles();
    const history = useHistory();

    useEffect(() => {
        let hash = props.location.hash;

        if (hash == `#${Routes.SignInHashes.exist}`) {
            setSnackOpen(false);
            setErrorMessages({ errors: [], type: '' });
            setIsFlipped(false);
        } else if (hash == `#${Routes.SignInHashes.new}`) {
            setSnackOpen(false);
            setErrorMessages({ errors: [], type: '' });
            setIsFlipped(true)
        }
    }, [props.location.hash])

    const flip = () => {

        let targetPage = null;
        let currentLocation = history.location;

        if (currentLocation.hash === `#${Routes.SignInHashes.new}`) {
            targetPage = Routes.SignInHashes.exist;
        } else {
            targetPage = Routes.SignInHashes.new;
        }
        history.replace({
            pathname: Routes.User,
            hash: targetPage
        })
    }

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
            <div className={classNames('container', 'pageRoot', styles.container)}>


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

                <div className={classNames("cont", { 's--page2': isFlipped })}>
                    <div className="sign-in">

                        <div>
                            <LoginPage onMessage={(errors: any, type: string) => onMessageRecieved(errors, type)} />
                        </div>

                    </div>


                    <div className="sub-cont">
                        <div className="img">
                            <div className="img__text m--up">
                                <h2>New here?</h2>
                                <p>Sign up and discover great amount of new opportunities!</p>
                            </div>
                            <div className="img__text m--in">
                                <h2>One of us?</h2>
                                <p>If you already has an account, just sign in. We've missed you!</p>
                            </div>
                            <div className="img__btn" onClick={flip}>
                                <span className="m--up">Register</span>
                                <span className="m--in">Log In</span>
                            </div>
                        </div>
                        <div className="sign-up">

                            <div>
                                <RegisterPage onMessage={(errors: any, type: string) => onMessageRecieved(errors, type)} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <CopyRightStrip color={Theme.fontColor} />
        </>
    )

}

export default LoginRegisterPage;