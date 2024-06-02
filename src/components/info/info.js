import React from 'react';
import './info.css';
import Break from '@/app/break/break';
import Header from '@/components/Header';

const Info = () => {
  return (
    
    <div className='info'>
      <Header />

      <Break text="01"/>
      <div className="row">
        <div className="smallbox">
          <h1>INTRODUCTION</h1>
        </div>
        <div className="bigbox">
          <p>For over 3 years, I&apos;ve been on an exciting digital design journey, working with both new startups and established corporations. To me, websites are more than just designs; they tell the story of the product and how it helps users. I love exploring unique and creative interactions, but what I care about also is making sure the handoff to developers is smooth and easy.</p>    
        </div>
      </div>

      <Break text="02"/>
      <div className="row">
        <div className="smallbox">
          <h1>EXPERIENCE</h1>
        </div>
        <div className="bigbox">
          <p>
            TBWA Group <span className="point"> * </span> Phibious Group <span className="point"> * </span> Navigos Group<span className="point"> * </span> Amex GBT <span className="point"> * </span> Egerie 
          </p>
        </div>
      </div>

      <Break text="03"/>
      <div className="row">
        <div className="smallbox">
          <h1>SKILLS</h1>
        </div>
        <div className="bigbox">
          <p>
            User Research <span className="point"> * </span> Visual Design <span className="point"> * </span> Usability Testing <span className="point"> * </span> Front-End Development <span className="point"> * </span> Prototyping 
          </p>
        </div>
      </div>
 
    </div>
  );
}

export default Info;
