import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { createStyles, makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { Theme } from '../Services/App.service';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMapMarkerAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
    container: {
        width: '100%',
        height: '100%',
        textAlign: 'left',
        boxSizing: 'border-box',
        padding: '0 20px 40px',
        maxHeight: '100vh',
        overflowY: 'scroll',
        // border: `1px solid #ccc`,
    },
    head: {
        padding: '15px',
        borderRadius: Theme.radius2,
        border: `1px solid #ccc`,
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        zIndex: 99,
    },
    title: {
        fontSize: 20,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 100
    },
    logoWrap: {
        textAlign: 'left'
    },
    logo: {
        alignItems: 'left',
        borderRadius: Theme.radius1,
        // border: '1px solid #ccc8'
    },
    logo_S: {
        width: 65,
        height: 65,
    },
    logo_L: {
        width: 100,
        height: 100,
    },
    contentBody: {
        padding: '0 20px',
        '& ul': {
            listStyle: 'none'
        }
    },
    iconButton: {
        marginLeft: 10,
        '& svg': {
            fontSize: 16
        },
        '&:focus': {
            outline: 'none'
        }
    },
    icons: {
        color: Theme.secondary,
        marginRight: 10
    },
    buttonsWrap: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    specificationContainer: {
        padding: '30px 0'
    },
    specification: {
        '& h6': {
            marginBottom: 10
        },
        '& p': {
            fontWeight: 100,
        }
    },
    skeleton_S: {
        width: '100%'
    },
    skeleton_L: {
        width: '50%'
    }

});

export const JobDetailSkeleton = (props: any) => {

    const styles = useStyles();
    const isMobile = useMediaQuery('(max-width:767px');


    return (
        <div className={styles.container}>


            <div className={styles.head} >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Grid container spacing={3} >

                        <Grid item>
                            <Skeleton className={isMobile ? styles.skeleton_S : styles.skeleton_L} variant='rect' width={isMobile ? 65 : 100} height={isMobile ? 65 : 100} />
                        </Grid>

                        <Grid item style={{ flexGrow: 1 }} >
                            <div>
                                <Skeleton className={isMobile ? styles.skeleton_S : styles.skeleton_L} variant='text' />
                                <Skeleton className={isMobile ? styles.skeleton_S : styles.skeleton_L} variant='text' />
                            </div>
                        </Grid>

                    </Grid>

                </div>

            </div>


            <div className={styles.contentBody}>

                <Grid container spacing={1} className={styles.specificationContainer} >
                    <Grid item md={6} className={styles.specification}>
                        <Typography variant={'subtitle2'}>
                            <FontAwesomeIcon className={styles.icons} icon={faBriefcase} />Job Type</Typography>
                        <Skeleton className={isMobile ? styles.skeleton_S : styles.skeleton_L} variant='text' />
                    </Grid>

                    <Grid item md={6} className={styles.specification}>
                        <Typography variant={'subtitle2'}>
                            <FontAwesomeIcon className={styles.icons} icon={faBriefcase} />Exerience Required</Typography>
                        <Skeleton className={isMobile ? styles.skeleton_S : styles.skeleton_L} variant='text' />
                    </Grid >

                    <Grid item md={6} className={styles.specification}>
                        <Typography variant={'subtitle2'}>
                            <FontAwesomeIcon className={styles.icons} icon={faMapMarkerAlt} />Location</Typography>
                        <Skeleton className={isMobile ? styles.skeleton_S : styles.skeleton_L} variant='text' />
                    </Grid>

                    <Grid item md={6} className={styles.specification}>
                        <Typography variant={'subtitle2'}>
                            <FontAwesomeIcon className={styles.icons} icon={faMoneyBill} />Salary</Typography>
                        <Skeleton className={isMobile ? styles.skeleton_S : styles.skeleton_L} variant='text' />
                    </Grid>
                </Grid>


                <div>
                    <Typography variant='subtitle1'>Job Description :</Typography>
                    <Skeleton className={isMobile ? styles.skeleton_S : styles.skeleton_L} variant='text' />
                    <Skeleton className={isMobile ? styles.skeleton_S : styles.skeleton_L} variant='text' />
                    <Skeleton className={isMobile ? styles.skeleton_S : styles.skeleton_L} variant='text' />

                </div>

                {/* <CustomButton size='small' title='Apply Now' /> */}
            </div>
        </div >
    )

}