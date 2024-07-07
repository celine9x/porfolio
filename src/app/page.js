'use client'
import React from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Work from "./work/work";
import Hero from "./hero/hero";

import About from "./about/about";
import Break from "./break/break";
import Contact from "./contact/contact";
import Header from '../components/header';
import Skills from "./skills/skills";
import Quote from "./quote/quote";
import Illustration from "./illustration/illustration";
import Footer from "./footer/footer";
import CustomCursor from '../components/customcursor/CustomCursor';
import LoadingScreen from './loading-screen/loadingscreen';

export default function Home() {
  const [showHeader, setShowHeader] = React.useState(false);

 



  return (
    <main className={styles.main}>
      
   {/* 
<div className={styles.headerrevealer}></div>
<LoadingScreen />
*/}
      <CustomCursor />
      <Header/>
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Quote />
      <Skills />
      <Illustration />
      <div id="work">
        <Work />
        <Footer />
      </div>
 
      <div className={styles.headerrevealer}></div>
     
    </main>
  );
}