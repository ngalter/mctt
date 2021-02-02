import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Iframe from 'react-iframe';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: '#cc3300',
    color: 'white',
  },
  top: {
    fontFamily:  'Paytone One, sans-serif;',
    backgroundColor: '#cc6600',
    transition: '.3s',
    '&:hover': {
      backgroundColor: 'whitesmoke',
    }
  },
  text: {
    height: '140px'
  },
  header: {
    color: 'white',
    fontSize: 20,
    '&:hover': {
      color: '#cc6600',
    }
  },
  font: {
    fontFamily:  'Paytone One, sans-serif;',
  },
  frame: {
    backgroundColor: 'black',
    padding: '2px',
    borderColor: 'black',
  }
}));

export default function RaceInfoCard(props) {
  const classes = useStyles();

  return (<div>
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
          title={<Typography className={classes.font}>{props.header}</Typography>}
        />
        </Link>
      {props.img
        ?
        <CardMedia
          className={classes.media}
          image={props.img}
          title="mercer county turkey trot"
        />
        :
        <Iframe className={classes.frame}
        url={props.video}
        alt='warm up'
        title='warm up'
        backgroundColor='black'  
        width="100%"
        height="auto"
        display="initial"
        position="relative"/> 
      }
      <CardContent style={{maxHeight: 200, overflow: 'auto'}}>
        <Typography variant="body2" color="textSecondary"
          className={classes.text}
          component="p"
        >
            {props.text}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
