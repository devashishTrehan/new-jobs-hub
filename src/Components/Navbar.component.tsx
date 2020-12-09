import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Nav, Navbar } from 'react-bootstrap';
import { Navlink } from './NavLink.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretUp, faEllipsisV, faLock, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Routes, Theme, } from '../Services/App.service';
import { UserContext } from '../Context/User.context';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { CustomButton } from './CustomButton.component';
import { Search } from './Search.component';
import { Button, IconButton, Menu, MenuItem, Tooltip, useMediaQuery, } from '@material-ui/core';
import classNames from 'classnames';
import { UserMenu } from './UserMenu.component';
import { Domain } from '../Services/Api.service';


const useStyles = makeStyles({

  navBar: {
    padding: '8px calc(5% - 10px)',
    // boxShadow: `0px 2px 10px 0px #ccc`,
    backgroundColor: '#fff !important',
  },
  collapsible: {
    // backgroundColor: '#fff',
  },

  menuIcon: {
    marginRight: 10,
    color: 'gray',
    fontSize: 14
  },
  UserMenuIcon: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  logo_S: {
    width: 100
  },
  logo_L: {
    width: 160
  },
  profileImageButtonWrap: {
    position: 'relative',
    cursor: 'pointer',
    "& div": {
      display: 'flex',
      flexDirection: 'row',
      color: 'gray',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& p': {
      fontSize: 12,
      fontWeight: 600,
      margin: 0
    },
    '& .arrow': {
      transition: '.5s',
      marginLeft: 5
    },
    '& .arrow-down': {
      transform: 'rotate(180deg)',
    }
  },
  profileMenuWrap: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  profileImageButton: {
    width: 40,
    height: 40,
    padding: 0,
    minWidth: 0,
    overflow: 'hidden',
    "& img": {
      width: '100%',
    },

  },
  UnverifiedEmailIndicator: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'red',
    top: 4,
    right: -2
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  LoginRegisterButton: {
    '& .tiltLine': {
      fontSize: 20,
    },
    '& a': {
      color: Theme.fontColor,
      fontWeight: 500,
      transition: '.3s',
      textDecoration: 'none',
      '&:hover': {
        color: Theme.primary
      }
    },
    '&>Span ': {
      padding: 8,
      '& svg': {
        marginRight: 10
      },
      '& span': {
        fontSize: 16,
      }
    }
  },
  LoginRegisterButton_S: {
    '& .tiltLine': {
      fontSize: 16,
    },
    '&>Span ': {
      padding: 5,
      '& svg': {
        marginRight: 5
      },
      '& span': {
        fontSize: 14,
      }
    }
  }

})


export function NavBar(props: any) {

  const styles = useStyles();

  const customStyles = {
    toggleButton: {
      border: 'none',
      fontSize: '20px',
      color: Theme.fontColor
    }
  }
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [profileMenuRef, setProfileMenuRef]: any = React.useState(null);
  const { user } = React.useContext(UserContext);

  const isMobile = useMediaQuery('(max-width:769px)');
  const isTablet = useMediaQuery('(max-width:992px)');

  const location = useLocation();
  const history = useHistory();


  const toggleNav = () => {

    setIsNavOpen(prev => {
      return !prev
    })
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (profileMenuRef.current && profileMenuRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setIsNavOpen(false);
  };

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfileMenuRef(event.currentTarget);
  };

  const closeMenu = () => {
    setProfileMenuRef(null);

  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setIsNavOpen(false);
    }
  }




  return (
    <Navbar className={styles.navBar} bg="light" expand="lg" variant="light" >

      <div className={styles.row}>
        {
          props.home && (
            <Navbar.Toggle as={() => {
              if (isTablet) {
                return (<IconButton style={customStyles.toggleButton} onClick={toggleNav} ><FontAwesomeIcon icon={faBars} /></IconButton>)
              } else {
                return null;
              }
            }} aria-controls="basic-navbar-nav" />
          )
        }

        <Navlink to={Routes.Home}><img className={classNames(isMobile ? styles.logo_S : styles.logo_L)} src='/assets/images/ph-logo.png' /></Navlink>
      </div>

      <Navbar.Collapse in={isNavOpen} className={styles.collapsible} id="basic-navbar-nav" >

        <Nav className="mr-auto" style={{ margin: props.home ? 'unset' : 'auto', ...props.rightContainerStyle }}>

          {

            props.home ?
              <>
                {
                  location.pathname !== Routes.Home && (<Navlink to={Routes.Home}>Home</Navlink>)
                }

                {/* <Navlink to={Routes.Recruiters}>Recruiters</Navlink> */}

                <Navlink to={{
                  pathname: Routes.Jobs + Routes.JobList,
                  query: { jobType: '' }
                }}
                >Browse Job</Navlink>

                {/* <Navlink to={{
                  pathname: Routes.Jobs + Routes.JobList,
                  query: {
                    jobType: 'gov'
                  }
                }}>Govt. Job</Navlink> */}

                {/* <Navlink to={Routes.WalkInJobs}>Walk in Jobs</Navlink> */}
              </>
              : !isTablet ? <Search height={40} /> : null
          }

        </Nav>
      </Navbar.Collapse>

      {
        user?.id ?

          <div className={styles.profileMenuWrap}>
            <div className={styles.profileImageButtonWrap}>
              <Tooltip title={'User Profile'}>
                <IconButton className={styles.profileImageButton} aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push(`${Routes._ProfileRoute}/${user?.slug}`)}>
                  <img src={user?.profilePicture ? Domain + user.profilePicture : '/assets/images/defaultProfile.png'} />

                </IconButton>
              </Tooltip>
              {
                !user?.isVerified ?
                  <Tooltip title={'Email not verified'}>
                    <span className={styles.UnverifiedEmailIndicator}></span>
                  </Tooltip>
                  : null
              }
              {/* <div>
                <p>me</p>
                <FontAwesomeIcon icon={faCaretUp} className={classNames('arrow', { 'arrow-down': Boolean(profileMenuRef) })} />
              </div> */}
            </div>
            <IconButton className={styles.UserMenuIcon} aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>
              <FontAwesomeIcon icon={faEllipsisV} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={profileMenuRef}
              keepMounted
              open={Boolean(profileMenuRef)}
              onClose={closeMenu}
              style={{ marginTop: 10 }}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <UserMenu closeMenu={closeMenu} />
            </Menu>
          </div>
          :
          // < div style={{ display: 'flex', flexDirection: 'row', }}>
          //   <CustomButton buttonStyles={isMobile ? customStyles.button_S : customStyles.button_L} size='small' onClick={() => navigateTo({
          //     pathname: Routes.User,
          //     hash: Routes.SignInHashes.exist
          //   })} title='Log In' />
          //   <CustomButton buttonStyles={isMobile ? customStyles.button_S : customStyles.button_L} onClick={() => navigateTo({
          //     pathname: Routes.User,
          //     hash: Routes.SignInHashes.new
          //   })} title='Register' />
          // </div>

          <div className={classNames(styles.LoginRegisterButton, { [styles.LoginRegisterButton_S]: isMobile })}>
            <span>
              <Link to={{
                pathname: Routes.User,
                hash: Routes.SignInHashes.exist
              }}>
                <FontAwesomeIcon icon={faLock} />
                <span>Login</span>
              </Link>
            </span>
            <i className={'tiltLine'}>/</i>
            <span >
              <Link to={{
                pathname: Routes.User,
                hash: Routes.SignInHashes.new
              }}>
                <FontAwesomeIcon icon={faUser} />
                <span>Register</span>
              </Link>
            </span>
          </div>
      }

      {
        isTablet && !props.home && (
          <div style={{ width: '100%', margin: '10px 0px 10px 10px' }}>
            <Search animate={true}  />
          </div>
        )
      }
    </Navbar >
  );
}

