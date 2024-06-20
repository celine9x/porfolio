
import Spline from '@splinetool/react-spline';
import './layla.css';
import React from 'react';
import Nav from '../../app/nav/nav';
import '../../app/globals.css';
import CustomCursor from '@/components/customcursor/CustomCursor';
import Footer from '@/app/footer/footer';
import Content1 from '@/components/contents/content1/content1';
import Header from '@/components/header';


export default function MFA() {
  return (
    <div className='main'>
      
   
   <Nav/>
        <CustomCursor />
        <Content1 />
   

      
   
     


        
        <Footer />

     
    </div>
  );
}