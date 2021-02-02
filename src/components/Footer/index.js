import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import './styles.css';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: 'auto'
  },
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      backgroundColor: 'gainsboro',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, .4)',
      zIndex: 100,
  },
}));
  
  export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');
  
    const handleChange = (newValue) => {
        setValue(newValue);
    };
  
      return (
        <BottomNavigation
          value={value} onChange={handleChange} className={[classes.root, classes.stickToBottom]}
        >
          <BottomNavigationAction
            value=""
            href="/"
            icon={<HomeIcon
              className='footer-icon' />}>
          </BottomNavigationAction>    
          <BottomNavigationAction
            href="https://www.instagram.com/mercercountyturkeytrot/"
            target="_blank"
            rel="noopener noreferrer"
            value=""
            icon={<InstagramIcon
              className='footer-icon'/>}>
          </BottomNavigationAction>
          <BottomNavigationAction
            href="https://www.facebook.com/MercerCountyTurkeyTrot"
            target="_blank"
            rel="noopener noreferrer"
            value=""
            icon={<FacebookIcon
              className='footer-icon'/>}>
          </BottomNavigationAction>
          <BottomNavigationAction
            value=""
            href="mailto:mercerturkeytrot@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            icon={<EmailIcon
              className='footer-icon'
            />}> 
          </BottomNavigationAction>
      </BottomNavigation>
    );
  }

