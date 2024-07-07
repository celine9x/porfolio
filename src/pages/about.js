'use client'
import React from 'react';
import Footer from '../app/footer/footer';

import Info from '../components/info/info';
import '../app/globals.css'; 
import CustomCursor from '@/components/customcursor/CustomCursor';
import styles from '../pages/about/about.module.css';
import Header from '../components/header';
import ZoomParallax from '@/components/ZoomParallax/index';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';



export default function About() {

    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

    return (
        <main className={styles.main}>
            
            <CustomCursor/>
          <Header/>
            <ZoomParallax />
          
        
            
            <Info/>
          
            <Footer/>
            
        </main>
    )
}