import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Drawer from '../Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
      fontFamily:  'Paytone One, sans-serif;',
      flexGrow: 1,
      color: 'white',
      fontSize: '16px',
    },
    appbar: {
      background: '#cc6600',
   }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar >
        <Drawer />
          <Link style={{ textDecoration: 'none' }} href="/" >
          <Typography variant="h6" className={classes.title}>
                      MERCER COUNTY TURKEY TROT
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

