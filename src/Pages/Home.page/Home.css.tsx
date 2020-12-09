import { makeStyles } from '@material-ui/styles';
import { Theme } from '../../Services/App.service';



export const HeaderStyles = makeStyles({
  HeadWrapper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/assets/bg-images/bannerHome.webp')`,
    padding: '0 5%',
    textAlign: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  banner1: {
    position: 'absolute',
  },
  banner2: {
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${process.env.PUBLIC_URL}/assets/bg-images/bannerHome2.png')`,
    animation: 'UpDown infinite 3.5s',
  },
  headLeftContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'

  },
  HeadContainer: {
    margin: '6% 0',
    maxWidth: '100%',
    '& h3:last-child': {
      display: 'inline-block',
      maxWidth: '100%',
      overflow: 'hidden',
      borderRight: `3px solid #fff`,
      whiteSpace: 'nowrap',
      margin: '0 auto',
      padding: '10px 0',
      paddingRight: 3,
      letterSpacing: '1px',
      animation: 'Typing 8s steps(40, end), BlinkCaret .75s step-end infinite',
    }
  },
  HeadContainer_S: {
    '& h3:last-child': {
      padding: '6px 0',
      fontSize: 24,
      paddingRight: 3,
    }
  },
  imageWrap: {
    position: 'relative',
    maxWidth: 100,
    backgroundSize: 'cover',
  },
  userTypeImage: {
    width: '100%',
  },
  filledImageAddon: {
    position: 'absolute'
  },
  userTypeWrap: {
    backgroundColor: '#fff',
    borderRadius: Theme.radius3,
    height: 'auto',
    margin: '5% 0',
    padding: '10px 20px',
    boxShadow: '6px 6px 15px 0px #aaa5',
    '& p': {
      fontSize: 14
    }
  },
  userTypeItem: {
    cursor: 'pointer',
    width: '100%',
    '& h6': {
      transition: '1s',
    },
    '& p': {
      transition: '1s',
    },
    '&:hover img': {
      animation: 'Rotate infinite 4s linear',
    },
    '&:hover h6': {
      color: Theme.primary,
    },
    '&:hover p': {
      color: Theme.secondary,
    }
  },
  userTypeHead: {
    color: Theme.secondary,
    fontWeight: 600
  },
  downButton: {
    margin: 'auto',
    width: 60,
    height: 60,
    borderRadius: '50%',
    color: '#fff',
    backgroundColor: Theme.primary,
    marginBottom: '-35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24
  },
})


export const ContentCardStyles = makeStyles({
  pageContent: {
    marginTop: 70,
    padding: '0 5%'
  },
  cardsWrapper: {
    padding: '30px 0 50px',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  cardContainer: {
    margin: '30px -20px',
    '& .left': {
      animation: 'SwipeLeft 2s',
    },
    '& .right': {
      animation: 'SwipeRight 2s',
    },
  },
  cardHead: {
    marginBottom: '6%',
    textTransform: 'uppercase',
    fontWeight: 400,
    // fontSize: 60

  },
  cardItemWrap2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h6': {
      color: Theme.fontColor,
    },
    '& img': {
      marginTop: 20,
      width: '100%',
      margin: '0 auto',
    },
    '& video': {
      marginTop: 20,
      width: '100%',
      margin: '0 auto',

    },
  },
  imageRight: {
    float: 'right'
  },
  imageLeft: {
    float: 'right'
  },
  contentRight: {
    float: 'right',
    width: '100%'
  },
  cardItemWrap: {
    marginTop: 10,
    maxWidth: '70%',
    backgroundColor: Theme.tertiary,
    padding: 15,
    borderRadius: Theme.radius2,
    color: '#fff',
    alignItems: 'center',
    verticalAlign: 'middle',

  },
  cardItemIcon: {
    width: 45,
    height: 45,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: 'red',
    borderRadius: '50%',
    lineHeight: '45px'
  },
  cardItemText: {
    paddingLeft: 20,
    width: '85%',
    fontSize: 18,
    '&>p': {
      margin: '0px'
    }
  },
})

export const BrowseTabStyles = makeStyles({
  mainContainer: {
    padding: '30px 5% 0'
  },
  tabsContainer: {
    overflowX: 'scroll',
    marginTop: 10,
    scrollbarWidth: 'thin',
    scrollbarColor: `${Theme.primary} #fff0`
  },
  tab: {
    '&:focus': {
      outline: 'none'
    }
  },
  browseWrap: {
    display: 'flex',
    '& ul': {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0 50px 0 ',

      '& li': {
        width: '25%',
        textAlign: 'left',
        float: 'left',
        paddingRight: 10,
        lineHeight: '40px',
        '& a': {
          color: Theme.fontColor,

        }
      }
    }
  },
})

export const StatStyles = makeStyles({
  statsBackground: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg-images/stats-bg.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  statsContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: Theme.primary + 'cc',
    padding: '80px 5%',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'left',
    '& p': {
      fontSize: 24,
      marginBottom: 5,
      fontWeight: 400,
    }
  },
  deviceMockupWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      position: 'absolute',
      top: -60,
      left: -150,
      animation: 'UpDown infinite 3s',

    }
  }
})
