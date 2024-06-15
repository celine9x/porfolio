import React from 'react';
import './info.css';
import Break from '@/app/break/break';
import Text1 from '@/components/info/text1/text1';
import Text2 from '@/components/info/text2/text2';
import Text3 from '@/components/info/text3/text3';

const Info = () => {
  return (
    
    <div className='info'>
 

      <Break text="01"/>
      <div className="row">
        <div className="smallbox">
          <h1>INTRODUCTION</h1>
        </div>
        <div className="bigbox">
        <Text1/>
        </div>
      </div>

      <Break text="02"/>
      <div className="row">
        <div className="smallbox">
          <h1>EXPERIENCE</h1>
        </div>
        <div className="bigbox">
        <Text2/>
        </div>
      </div>

      <Break text="03"/>
      <div className="row">
        <div className="smallbox">
          <h1>SKILLS</h1>
        </div>
        <div className="bigbox">
        <Text3/>
        </div>
      </div>
 
    </div>
  );
}

export default Info;
