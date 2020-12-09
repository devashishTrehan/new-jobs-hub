import React, { useEffect, useState } from 'react';
import { makeStyles, Snackbar } from '@material-ui/core';
import classNames from 'classnames';
import { Routes, Theme } from '../Services/App.service';
import { Alert, AlertTitle } from '@material-ui/lab';
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
        width: '450px',
        maxWidth: 'calc(100% - 20px)',
    },
    cardsWrapper: {
        position: 'relative',
        width: '100%',
        minHeight: 300,
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
        overflow:'hidden',
        justifyContent:'center'
    },
})

const FormWrapper = (props: any) => {


    const styles = useStyles();

    return (
        <>
            <NavBar home={true} />

            <div className={classNames('container', styles.container)}>


                <div className={styles.formsWrapper}>

                    <div className={styles.upperSection}>
                        <img src={props?.headImage ? props.headImage : '/assets/bg-images/EmailFormTop.jpg'} />
                    </div>

                    <div className={classNames({ [styles.cardsWrapper]: true })}>
                        {
                            props.children
                        }
                    </div>

                </div>
            </div>

            <CopyRightStrip color={'#000'} />
        </>
    )

}

export default FormWrapper;