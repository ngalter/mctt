import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VendorCard from "../VendorCard";
import Typography from '@material-ui/core/Typography';
import data from "../data/sponsors.json";
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


function Sponsors() {
  const classes = useStyles();

    return (<div  className='s-wrapper' id={'sponsorinformation'}>
        <Typography variant="h5" className={classes.header}>SPONSORS</Typography>
        <div className='s-grid'>
        {
                    data.sponsor.map((sponsor, id) => ( 
                      <VendorCard
                        header={sponsor.name}
                        sort={sponsor.sort}
                        img={sponsor.img}
                        link={sponsor.url}
                        icon={sponsor.icon}
                        />
                ))
          }
                
                </div></div>
                );
                }

export default Sponsors;
