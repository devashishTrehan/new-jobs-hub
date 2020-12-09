import { faCaretDown, faCheck, faClipboardCheck, faEye, faHeart, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import * as React from 'react';
import { FilterAttribsContext } from '../Context/FilterAttribs.context';
import { JobStatusList, Theme } from '../Services/App.service';
import { List, ListItem, MenuList, Popover, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';

const listItemHeight = 34;
const listHeight = 34 * 12;

const useStyles = makeStyles({
    container: {
        margin: '10px 20px',
        width: 'calc(100% - 40px)',
        overflowX: 'hidden',
        '&>div': {
            display: 'flex',
            overflowX: 'scroll',
            flexDirection: 'row',
            paddingBottom: 10,
            justifyContent: 'flex-start',
            flexWrap: 'nowrap',

            '&::-webkit-scrollbar': {
                height: 5,
                borderRadius: 5,
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: Theme.primary + 'aa',
            },
        }
    },
    chip: {
        padding: '20px 15px',
        backgroundColor: 'transparent',
        borderRadius: 0,
        borderBottom: '3px solid #ddd',
        '&:active': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
        },
        '&:hover': {
            backgroundColor: Theme.primary + '22',
        },
        '&::after': {
            display: 'block',
            content: '""',
            borderBottom: `solid 3px ${Theme.primary}`,
            transform: 'scaleX(0)',
            transition: 'transform 250ms ease-in-out',
            width: '100%',
            position: 'absolute',
            bottom: -3,
        }
    },
    activeStatus: {
        color: Theme.primary,
        backgroundColor: 'transparent !important',
        '&::after': {
            transform: 'scaleX(1)',
        }
    }
})

export const JobStatusListComponent = (props: any) => {

    const { getFilterOptions } = React.useContext(FilterAttribsContext);
    const styles = useStyles();
    const [currentStatus, setCurrentStatus]: any = React.useState('');

    const isMobile = useMediaQuery('(max-width:769px)');
    const routeMatch: any = useRouteMatch();

    React.useEffect(() => {
        console.log('match routes', routeMatch.params);
        let status = routeMatch.params?.status;
        if (status) {
            setCurrentStatus(status);
        }
    }, [routeMatch.params])


    return (
        <Grid container className={styles.container} >
            <div >
                <Chip
                    size='medium'
                    icon={<FontAwesomeIcon icon={faEye} style={{ color: Theme.info }} />}
                    className={classNames(styles.chip, { [styles.activeStatus]: currentStatus === JobStatusList.Viewed })}
                    label={JobStatusList.Viewed}
                    onClick={() => { props.onClick && props.onClick(JobStatusList.Viewed) }}
                />
                <Chip
                    size='medium'
                    icon={<FontAwesomeIcon icon={faHeart} style={{ color: '#f00' }} />}
                    className={classNames(styles.chip, { [styles.activeStatus]: currentStatus === JobStatusList.Saved })}
                    label={JobStatusList.Saved}
                    onClick={() => { props.onClick && props.onClick(JobStatusList.Saved) }}
                />
                <Chip
                    size='medium'
                    icon={<FontAwesomeIcon icon={faCheck} style={{ color: Theme.success }} />}
                    className={classNames(styles.chip, { [styles.activeStatus]: currentStatus === JobStatusList.Applied })}
                    label={JobStatusList.Applied}
                    onClick={() => { props.onClick && props.onClick(JobStatusList.Applied) }}
                />
                <Chip
                    size='medium'
                    icon={<FontAwesomeIcon icon={faClipboardCheck} style={{ color: 'gray' }} />}
                    className={classNames(styles.chip, { [styles.activeStatus]: currentStatus === JobStatusList.Shortlisted })}
                    label={JobStatusList.Shortlisted}
                    onClick={() => { props.onClick && props.onClick(JobStatusList.Shortlisted) }}
                />
                <Chip
                    size='medium'
                    icon={<FontAwesomeIcon icon={faTimesCircle} style={{ color: Theme.error }} />}
                    className={classNames(styles.chip, { [styles.activeStatus]: currentStatus === JobStatusList.Rejected })}
                    label={JobStatusList.Rejected}
                    onClick={() => { props.onClick && props.onClick(JobStatusList.Rejected) }}
                />
            </div>
        </Grid >
    )

}