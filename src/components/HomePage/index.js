import React from 'react';
import AppBar from '../AppBar'
import Drawer from '../Drawer';
import Footer from '../Footer';
import Banner from '../Banner';
import Intro from '../Intro';
import Divider from '@material-ui/core/Divider';
import RaceInformation from '../RaceInformation';
import Sponsors from '../Sponsors';
import Charities from '../Charities';
import './styles.css'

function HomePage() {
  return (<div>
    <AppBar />
    <Drawer />  
    <Banner />
    <Intro />
    <RaceInformation />
    <Divider />
    <Sponsors />
    <Divider />
    <Charities />
    <Footer /> 
    </div>
    );
}

export default HomePage;
