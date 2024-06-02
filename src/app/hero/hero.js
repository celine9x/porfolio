'use client';
import React, { useEffect } from 'react';
import './hero.css'
import Spline from '@splinetool/react-spline';
import Nav from '../nav/nav';
import gsap from 'gsap-trial';
import { SplitText } from "gsap-trial/SplitText";
import {motion } from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';

 const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText);
    let mySplitText = new SplitText('.split', {type:"chars"});
    let chars = mySplitText.chars; 
    gsap.from(chars, {yPercent:100,stagger:0.1,ease:'back.out', duration: 1});
  }, []); 



  return (
    <div className="hero">
      <Nav/> 
      <div className="container">
        <h1 className='split'>multidisciplinary</h1>
        
        
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