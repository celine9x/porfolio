
import Spline from '@splinetool/react-spline';

import React from 'react';
import Nav from '../../app/nav/nav';
import '../../app/globals.css';
import CustomCursor from '@/components/customcursor/CustomCursor';
import Footer from '@/app/footer/footer';

export default function MFA() {
  return (
    <div className='main'>
      
        <Nav/>
        <CustomCursor />
      

        <Spline className='background' scene="https://prod.spline.design/EExWapWp7J3X4iDo/scene.splinecode" />


        
        <Footer />

     
    </div>
  );
}