import * as React from 'react';
import { Button, CircularProgress, Divider, List, ListItem, ListItemIcon, ListItemText, Typography, } from '@material-ui/core';
import { Routes, Theme, } from '../Services/App.service';
import { UserContext } from '../Context/User.context';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faExclamationCircle, faQuestion, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Domain } from '../Services/Api.service';
import { Console } from 'console';

const useStyles = makeStyles({
    container: {
        maxWidth: 150
    },
    P_info_Container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '0px 8px 8px 8px'
    },
    imageWrap: {
        width: 40,
        height: 40,
        borderRadius: 40,
        overflow: 'hidden',
        marginRight: 8,
        '& img': {
            width: '100%',
            height: '100%'
        }
    },

    name: {
        "& p": {
            margin: 0,
            paddingRight: 7,
            textTransform: 'capitalize',
            fontWeight: 500
        }
    },
    listItem: {
        color: '#888',
        padding: '2px 10px'
    },
    listIcon: {
        minWidth: 30,
        '& svg': {
            textAlign: 'center',
            color: '#888',
            fontSize: 14
        }
    }

});

interface MenuProps {
    closeMenu: Function
}

export function UserMenu(props: MenuProps) {

    const { user, logout, loggingOut } = React.useContext(UserContext);
    const [isLoggedOut, setIsLoggedOut]: any = React.useState(null);
    const history = useHistory();

    // const user: any = {
    //     full_name: 'dev trehan',
    // }

    const styles = useStyles();


    const navigateTo = (route: any) => {
        history.push(route);
        props.closeMenu();
    }

    let _logout = async () => {
        var promise = new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                resolve(true);
            }, 10);
        });
        return promise;
    }

    const logoutUser = async () => {

        let response = await logout();
        // let response = await _logout();
        console.log(response);
        if (response) {
            history.replace(Routes.Home);
            props.closeMenu();
            setIsLoggedOut(null)
        } else {
            setIsLoggedOut(false)
        }
        
    }


    return (
        <div className={styles.container}>
            <List dense={true} style={{ padding: 0 }}>
                <div className={styles.P_info_Container}>
                    {/* <div className={styles.imageWrap}>
                        <img src={user?.profilePicture ? Domain + user?.profilePicture : "/assets/images/defaultProfile.png"} />
                    </div> */}
                    <span className={styles.name}>
                        <p>{user.full_name}</p>
                    </span>
                </div>
                <Divider />
                <ListItem button className={styles.listItem} onClick={() => navigateTo(`${Routes._ProfileEditRoute}/${user?.slug}`)}>
                    <ListItemIcon className={styles.listIcon}>
                        <FontAwesomeIcon icon={faEdit} />
                    </ListItemIcon>
                    <ListItemText>
                        <span>Edit Profile</span>
                    </ListItemText>
                </ListItem>

                <ListItem button className={styles.listItem}>
                    <ListItemIcon className={styles.listIcon}>
                        <FontAwesomeIcon icon={faQuestion} />
                    </ListItemIcon>
                    <ListItemText>
                        <span>Help</span>
                    </ListItemText>
                </ListItem>

                <ListItem button className={styles.listItem} onClick={logoutUser}>
                    {
                        loggingOut && (isLoggedOut === null) ?
                            <ListItemIcon className={styles.listIcon}>
                                <CircularProgress style={{ width: 15, height: 15 }} />
                            </ListItemIcon>
                            : isLoggedOut === false ?
                                <ListItemIcon className={styles.listIcon}>
                                    <FontAwesomeIcon icon={faExclamationCircle} style={{ color: Theme.error }} />
                                </ListItemIcon>
                                : <ListItemIcon className={styles.listIcon}>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </ListItemIcon>
                    }
                    <ListItemText>
                        <span>Log out</span>
                    </ListItemText>
                </ListItem>

            </List>
        </div>
    );
}


