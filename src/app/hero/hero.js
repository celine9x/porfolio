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
    gsap.from(chars, {yPercent:100,stagger:0.1,ease:'back.out', duration: 1, delay: 0.5});
  }, []); 



  return (
    <div className="hero">
      <Nav/> 
      <div className="container">
        <h1 className='split'>multi -</h1>

      </div>
      <div className="container">
        <h1 className='split'> disciplinary</h1>
      </div>

      <div className="container">
      <h1 className='split'>designer</h1>
      </div> 
     
      <div className="description"></div>
      <Spline className="background" scene="https://prod.spline.design/xe0nWkm8CmAFDIKD/scene.splinecode" />
    </div>
  );
};

export default Hero;