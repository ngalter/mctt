import React from 'react';
import BannerContent from '../BannerContent';
import data from "../data/banner.json";
import './styles.css';


function Banner() {

  return (<div>
        <BannerContent
        title1={data.title1}
        title2={data.title2}
        location={data.location}
        date={data.date}
        img={data.img}
        />    
      </div>
        );
}

export default Banner;
