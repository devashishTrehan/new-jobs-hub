import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../Services/App.service';

const useStyles = makeStyles({
    link: {
        color: Theme.fontColor,
        display: 'flex',
        fontWeight: 600,
        fontStyle: 'none',
        padding: 5,
        margin: '0 5px',
        borderRadius: 5,
        textDecoration: 'none !important',
        '&:hover': {
            color: Theme.primary,
        },

    },
})

export function Navlink(props: any) {

    const styles = useStyles();

    return (
        <>
            <Link {...props} className={styles.link}>{props.children}</Link>
        </>
    );
}


