import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
        maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    },
  top: {
      fontFamily:  'Paytone One, sans-serif;',
      backgroundColor: '#cc6600',
      transition: '.3s',
      '&:hover': {
        backgroundColor: 'whitesmoke',
      }
  },
  font: {
    fontFamily:  'Paytone One, sans-serif;',
  },
  avatar: {
    backgroundColor: '#cc3300',
    color: 'white',
  },
  header: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase',
    '&:hover': {
      color: '#cc6600',
    }
  }
}));

export default function VendorCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <Link style={{ textDecoration: 'none' }}
          className={classes.header}
          href={props.link}
          target='blank'
          rel='noopener noreferer'>    
        <CardHeader className={classes.top}
              avatar={
              <Avatar className={classes.avatar}>
              <i class={props.icon}></i>
              </Avatar>
              }
        title={
          <Typography variant={'p'} className={classes.font}>
          {props.header}
          </Typography>
        }
      />
      </Link>
        <CardMedia
        className={classes.media}
          image={props.img}
          title="mercer county turkey trot"
        />
    </Card>
  );
}
