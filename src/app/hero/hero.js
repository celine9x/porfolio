'use client';
import React, { useEffect } from 'react';
import './hero.css'
import Spline from '@splinetool/react-spline';
import Nav from '../nav/nav';
import gsap from 'gsap';
import { SplitText } from "./SplitText.min";

 const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText);
    let mySplitText = new SplitText('.split', {type:"chars"});
    let chars = mySplitText.chars; 
    gsap.from(chars, {yPercent:120,stagger:0.1,ease:'back.out', duration: 0.6,});
  }, []); 

// Inside Hero component
useEffect(() => {
  const handleResize = () => {
 
    if (window.innerWidth < 768) {

    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <div className="hero">

      <div className="container">
        <h1 className='split'> Multi -</h1>

      </div>
      <div className="container">
        <h1 className='split'>disciplinary</h1>
      </div>

      <div className="container">
      <h1 className='split'>Designer</h1>
      </div> 
     
     <div className="background">
     <Spline
        scene="https://prod.spline.design/xe0nWkm8CmAFDIKD/scene.splinecode" 
      />
</div>

    </div>
  );
};

export default Hero;