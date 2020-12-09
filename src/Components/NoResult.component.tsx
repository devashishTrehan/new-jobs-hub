import * as React from 'react';
import { Button, Typography, } from '@material-ui/core';
import { Theme, } from '../Services/App.service';
import { UserContext } from '../Context/User.context';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 200px)'
  },
  wrapper: {
    width: 600,
    maxWidth: '100%',
    padding: 30,
    '& p': {
      fontSize: 14,
      lineHeight: '24px'
    }
  },
  imageWrapper: {
    width: 100,
    height: 100,
    margin: '0 auto 20px',
    '& img': {
      width: '100%'
    }
  },
});

export function NoResult(props: any) {

  const [message, setMessage] = React.useState(props?.message);

  const styles = useStyles();


  React.useEffect(() => {
    setMessage(props.message);
  }, [props.message])

  return (
    <div className={classNames('container', styles.container)}>

      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src={'/assets/images/NoResultFound.png'} />
        </div>
        {/* <Typography variant={'h5'} className={classNames(styles.heading, styles.highlighted)} >title</Typography> */}
        <Typography style={{ fontSize: 18, fontWeight: 400, padding: '30px 0' }}>
          {message}
        </Typography>

        {
          props?.button && (
            <Button onClick={() => props.history.replace('/')} >Search Another</Button>
          )
        }

      </div>
    </div>
  );
}


