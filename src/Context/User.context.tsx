import * as React from 'react';
import { GetUserMailConfirmation, Logout, SendConfirmationMail, VerifyEmail } from '../Services/Api.service';
import { clearStore, getToken, getUser, StoreUser, Storages, Theme, StoreToken, Routes } from '../Services/App.service';
import { GetAccessTokenUrl } from '../Services/Api.service';
import { Loader } from '../Components/Loader.component/Loader.component';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/styles';
import { AppContext } from './App.context';
import { MailSent } from '../Pages/MailSent.page';

interface user {
    user: object,
    logout: Function
}

interface User_info {
    id: number,
    slug: string,
    profilePicture: string,
    isVerified: boolean,
    full_name: string,
    email: string,
}

const useStyles = makeStyles({
    unVerifiedMailStrip: {
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        backgroundColor: '#fef6e5',
        color: Theme.warning,
        transition: '.5s',
        width: '100vw',
        top: 0,
        left: 0,
        zIndex: 999,
        '& .text': {
            width: 'calc(100vw - 40px)',
            padding: '0 10px',
            lineHeight: '40px',
            cursor: 'pointer',
            '& p': {
                marginBottom: 0
            }
        },
        '& .icon': {
            width: '40px',
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '& svg': {

            }
        }
    },
    collapsedStrip: {
        transform: 'scaleY(0)',
    }
})

export const UserContext = React.createContext<any>({});


export function UserContextProvider(props: any) {

    const [user, setUser]: any = React.useState({});
    const [Tokens, setTokens]: any = React.useState({});
    const [loading, setLoading]: any = React.useState(true);
    const [loggingOut, setLoggingOut]: any = React.useState(false);
    const [isStripCollapsed, setIsStripCollapsed]: any = React.useState(true);
    const { openSnackbar, showModal, hideModal } = React.useContext(AppContext);

    const styles = useStyles();

    const get_User = async () => {
        setLoading(true);
        let user = await getUser();
        setUser(user);
        setLoading(false);
        return user;
    }

    const toggleStripVisibility = () => {
        setIsStripCollapsed((prev: boolean) => !prev);
    }

    const AsyncTokenRefresh = async () => {
        let user = await get_User();
        TokenHandler(user);
    }

    React.useEffect(() => {
        AsyncTokenRefresh();
    }, [])

    const refreshToken = async (token: any = Tokens, _user: User_info | null) => {

        let response = await fetch(GetAccessTokenUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh: token?.refresh })
        }).then(responseJson => responseJson.json());
        if (response?.detail) {
            console.log(response);
        } else if (response?.access) {
            console.log('refreshed tokens', response);
            setTokens(response);

            showUnverifyStrip(response, _user);

            StoreToken(response);
        }

    }

    const showUnverifyStrip = async (token: any, _user: User_info | null) => {
        if (_user?.id && !_user?.isVerified) {
            let response = await GetUserMailConfirmation(token.access, _user?.id);
            console.log('email confirmation response', response);
            if (response?.status) {
                if (response?.data) {
                    updateUser({ ..._user, isVerified: true });
                } else {
                    console.log('is verifying')
                    setTimeout(() => {
                        setIsStripCollapsed(response?.data);
                    }, 5 * 1000)
                }
            }
        }

    };


    const TokenHandler = (_user: any = user) => {
        setLoading(true);
        let Token = getToken();
        setTokens(Token);
        console.log('refreshing tokens');
        console.log('user id', _user.id);
        setLoading(false);
        if (_user?.id) {
            refreshToken(Token, _user);
        }
        let tokenTimer = setInterval(() => {
            Token = Token?.refresh ? Token : Tokens;
            if (_user?.id) {
                refreshToken(Token, _user);
            }
        }, 60 * 60 * 1000)
    }

    const updateUser = (user: User_info | {}, storeLocally: boolean = true) => {

        if (storeLocally) {
            StoreUser(user);
        }
        setUser(user);
    }

    const logout = async () => {
        setLoggingOut(true);
        let response = await Logout(user?.id, Tokens?.refresh);
        setLoggingOut(false);

        // console.log('logout response', response)

        if (response?.status == false) {
            return false;
        } else if (response?.status) {
            clearStore(Storages.Token);
            clearStore(Storages.User);
            updateUser({});
            setIsStripCollapsed(true);
            return true;
        }
    }

    const sendMail = async () => {
        console.log('sending mail');
        // window.open(`${Routes.MailSent}/?m_id=user`, '_blank');
        showModal(<MailSent user={user} userToken={Tokens} onClose={() => hideModal()} />)
        let response = await SendConfirmationMail(Tokens.access, user?.id);
        console.log('sending mail response', response);
        if (response?.status == false) {
            openSnackbar([response.message]);
        } else if (response?.status) {
            setIsStripCollapsed(true);
        } else {
            openSnackbar(['sorry! something went wrong']);
        }
    }


    return (
        <UserContext.Provider value={{
            user: user,
            logout: logout,
            setUser: updateUser,
            token: Tokens,
            loading: loading,
            showUnverifyStrip: showUnverifyStrip,
            loggingOut: loggingOut,
            setToken: (tokens: any) => setTokens(tokens)
        }}>
            {
                !loading ?
                    <div style={{ transition: '.5s', paddingTop: isStripCollapsed ? 0 : '40px' }}>
                        <div className={classNames(styles.unVerifiedMailStrip, { [styles.collapsedStrip]: isStripCollapsed })}>
                            <div className='text' onClick={sendMail}>
                                <p>We have sent a verification link to your email. If you don't see our email, click here</p>
                            </div>
                            <div className='icon' onClick={() => setIsStripCollapsed(true)}>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        {
                            props.children
                        }
                    </div>
                    : <Loader />
            }
        </UserContext.Provider>
    );
}
