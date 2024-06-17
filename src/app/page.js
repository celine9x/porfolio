'use client'
import React from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Work from "./work/work";
import Hero from "./hero/hero";
import Nav from "./nav/nav";
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

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const heroBottom = document.getElementById('hero').getBoundingClientRect().bottom;
    if (heroBottom <= 0) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  return (
    <main className={styles.main}>
      
   {/* 
<div className={styles.headerrevealer}></div>
<LoadingScreen />
*/}
      <CustomCursor />
      {showHeader && <Header />}
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Quote />
      <Skills />
      <Illustration />
      <div id="work">
        <Work />
      </div>
      <Footer />
      <div className={styles.headerrevealer}></div>
     
    </main>
  );
}