import { faBriefcase, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Routes, Theme } from '../Services/App.service';
import classNames from 'classnames';

// const useStyles = ;

export const Search = (props: any) => {

    const [Form, setForm] = React.useState({
        keyword: '',
        location: '',
    });
    const [collapsed, setCollapsed] = React.useState(false);

    const history = useHistory();
    const location: any = useLocation();
    const isMobile = useMediaQuery('(max-width:767px');
    console.log('isMibile', isMobile);
    React.useEffect(() => {
        const _location: any = history.location;
        setForm({ keyword: _location.state?.keyword, location: _location.state?.location })
    }, [history.location.state])

    React.useEffect(() => {
        if (props?.animate && isMobile) {
            setCollapsed(true)
        }
    }, [isMobile])

    const showFields = () => {
        setCollapsed(false);
    }

    const hideFields = () => {
        setCollapsed(true);
    }


    const useStyles = makeStyles({
        form: {
            backgroundColor: '#ccc9',
            width: '100%',
            borderRadius: Theme.radius2,
            overflow: 'hidden',
            transition: '.4s',
        },
        inputContainer: {
            backgroundColor: '#fff',
            borderRadius: Theme.radius2,
            justifyContent: 'center',
            display: 'flex',

            '& input': {
                height: props?.height ? props.height : isMobile ? 40 : 50,
                width: 'calc(100% - 50px)',
                border: 'none',
                '&:focus': {
                    border: 'none',
                    outline: 'none',
                }
            },
            '& svg': {
                margin: '0 10px',
                width: isMobile ? 40 : 50,
                height: props?.height ? props.height : isMobile ? 40 : 50
            }
        },
        submitButton: {
            width: '100%',
            height: '100%',
            borderRadius: Theme.radius2
        },
        item: {
            padding: 5,
        },
        collapsed_S: {
            height: props?.height ? props.height + 10 : 50,
            padding: 0,
            // animation:'SizeUp .5s '
        },
        collapsed_L: {
            height: props?.height ? props.height + 10 : 60,
            // animation:'SizeUp .5s '
        }
    });

    const styles = useStyles();

    const fieldChangeHandler = (field: string, value: any) => {
        setForm(prev => {
            return {
                ...prev,
                [field]: value
            }
        })
    }

    const search = (event: any) => {
        event.preventDefault();
        hideFields();

        if (Form.keyword !== location?.state?.keyword || Form.location !== location?.state?.location) {
            history.push({
                pathname: Routes.Jobs + Routes.JobList,
                state: { keyword: Form.keyword, location: Form.location }
            })
        }
    }

    return (
        // <div >
        <form className={classNames(styles.form, { [styles.collapsed_L]: collapsed && !isMobile, [styles.collapsed_S]: collapsed && isMobile })} onSubmit={search} >

            <Grid container >

                <Grid item xs={12} sm={10}>
                    <Grid container >

                        <Grid item className={styles.item} xs={12} sm={6} >

                            <div className={styles.inputContainer}>
                                <FontAwesomeIcon color={Theme.primary} icon={faBriefcase} />
                                <input
                                    // autoFocus={!isMobile}
                                    onFocus={showFields}
                                    placeholder={(isMobile && collapsed) ? 'Click to search job' : 'Job title or skill'}
                                    value={Form.keyword}
                                    onChange={(event: any) => fieldChangeHandler('keyword', event?.target.value)}
                                />
                            </div>

                        </Grid>

                        {/* <div style={{ marginLeft: 10 }}  > */}
                        <Grid item className={styles.item} xs={12} sm={6} >

                            <div className={styles.inputContainer}>

                                <FontAwesomeIcon color={Theme.primary} icon={faMapMarkerAlt} />
                                <input
                                    placeholder='Select city'
                                    value={Form.location}
                                    onChange={(event: any) => fieldChangeHandler('location', event?.target.value)}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={12} sm={2} className={styles.item}>

                    <Button className={styles.submitButton} variant='contained' color='primary' type='submit'>
                        <FontAwesomeIcon icon={faSearch} />
                        <Typography variant='button' style={{ paddingLeft: 10, textTransform: 'capitalize' }}>
                            Search
                     </Typography>
                    </Button>
                </Grid>
            </Grid>
        </form>
        // </div>
    )

}