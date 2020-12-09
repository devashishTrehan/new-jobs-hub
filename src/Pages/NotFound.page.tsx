import { Typography } from '@material-ui/core';
import { styles } from '@material-ui/pickers/views/Calendar/Calendar';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Footer } from '../Components/Footer.component';
import { NavBar } from '../Components/Navbar.component';
import { Routes, Theme } from '../Services/App.service';


export function NotFoundPage(props: any) {

  const [time, setTime] = React.useState(10);
  const history = useHistory();
  const styles = {
    width: '100%',
    padding: '50px 0'
  }

  React.useEffect(() => {
    let _time = time;
    let interval = setInterval(() => {
      if (_time > 1) {
        _time -= 1;
        setTime(_ => _time)
      } else {
        clearInterval(interval);
        history.replace(Routes.Home)
      }
    }, 1000)
  }, [])

  return (
    <div>
      <NavBar home={true} />
      <div style={styles} >
        <img style={{ maxWidth: '430px', display: 'block', margin: '0 auto' }} src='/assets/bg-images/notFound.png' />
        <Typography variant={'h4'} style={{marginBottom:15}} >Requested page doesn't exist</Typography>
        <Typography variant={'body1'} >This page will be <span style={{ color: Theme.primary }}>redirect after {time} seconds</span></Typography>
      </div>
      <Footer />
    </div>
  );
}