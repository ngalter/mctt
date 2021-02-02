import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: '10px',
    fontFamily: 'Paytone One, sans-serif',
    backgroundColor: '#993300',
    color: 'white',
  },
}));

function SignUp() {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.btn}
        variant='contained'
        href="https://runsignup.com/Race/NJ/WestWindsor/MercerCountyTurkeyTrot"
        target="_blank"
        rel="noopener noreferrer"
        linkButton={true}
      >Sign&nbsp;Up
      </Button>
    </div>
  );
}
export default SignUp;