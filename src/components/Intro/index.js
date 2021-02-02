import React from 'react';
import IntroContent from '../IntroContent';
import data from "../data/intro.json";
import './styles.css';

function Intro() {

  return (
    
    <div className='header-wrap'>
    <div className='box'>
        <div className='grid-container'>   
                  <IntroContent
                        header={data.header}
                        text={data.text}
                    />
        </div>   
      </div>
    </div>
    );
}

export default Intro;