import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from '../InfoCard';
import Typography from '@material-ui/core/Typography';
import data from "../data/raceinfo.json";
import './styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 600,
    },
  header: {
        fontFamily:  'Paytone One, sans-serif;',
        color: '#993300',
        textAlign: 'center',
        paddingTop: '50px'
    }
}));

function RaceInformation() {
    const classes = useStyles();

    return (<div id={'raceinformation'}>
        <div className='wrapper'>
        <Typography variant="h5" className={classes.header}>RACE INFORMATION</Typography>
        <div className='v-grid-container'>   
                    {data.raceinfo.map((info, id) => (    
                <InfoCard
                icon={info.icon}
                header={info.header}
                text={info.text}
                img={info.img}
                link={info.link}
                video={info.video}
            />
 ))
     }
    </div></div></div>
    );
}

export default RaceInformation;
