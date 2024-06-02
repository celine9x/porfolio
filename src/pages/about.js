'use client'
import React from 'react';
import Footer from '../app/footer/footer';
import Nav from '../app/nav/nav';
import Info from '../components/info/info';
import '../app/globals.css'; 
import CustomCursor from '@/components/customcursor/CustomCursor';
import styles from '../pages/about/about.module.css';

import ZoomParallax from '@/components/ZoomParallax/index';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import Header from '@/components/Header';


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
              <Header/>
            <CustomCursor/>
          
            <ZoomParallax />
          
            <Nav/>
            
            <Info/>
            <Footer/>
        </main>
    )
}