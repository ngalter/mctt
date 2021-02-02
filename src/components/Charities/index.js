import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VendorCard from "../VendorCard";
import Typography from '@material-ui/core/Typography';
import data from "../data/charities.json";
import './styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
    },
  header: {
    fontFamily: 'Paytone One, sans-serif;',
    color: '#993300',
      textAlign: 'center',
      paddingTop: '50px',
      paddingBottom: '40px',
    }
}));

function Charities(props) {
  const classes = useStyles();
  
  return (<div  className='c-wrapper' id={'charityinformation'}>
      <Typography variant="h5" className={classes.header}>CHARITIES</Typography>
      <div className='s-grid'>
        {
                    data.charity.map((charity, id) => ( 
                        <VendorCard
                        header={charity.name}
                        sort={charity.sort}
                        img={charity.img}
                        link={charity.url}
                        icon={charity.icon}
                        />
                ))
        }
                </div></div>
                );
                }

export default Charities;