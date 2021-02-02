import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SignUpButton from '../SignUpButton';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    header: {
        flexGrow: 1,
        fontFamily:  'Paytone One, sans-serif;',
        color: '#993300',
        marginTop: '20px',
        marginBottom: '0px',
        paddingRight: '30px',
        paddingLeft: '30px',
    },
    header2: {
        flexGrow: 1,
        fontFamily:  'Paytone One, sans-serif;',
        color: 'white',
        marginTop: '10px',
        marginBottom: '0px',
        paddingRight: '30px',
        paddingLeft: '30px',
    },
}));

function BannerContent(props) {
    const classes = useStyles();
    return (<div className='banner-wrap bg-bkd'>
        <div className='banner-box'>
            <div className='banner-container'> 
            <Typography variant="h4" className={classes.header}>
                {props.title1}<br />{props.title2}
            </Typography>                
            <img src={props.img} className='img-size' alt='logo' />
            <Typography variant="h5" className={classes.header2}>
                {props.location}<br />{props.date}
            </Typography>
            <SignUpButton />     
        </div>
        </div>
    </div>

  );
}

export default BannerContent;