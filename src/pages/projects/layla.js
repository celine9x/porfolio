'use client';
import Nav from '../../app/nav/nav';
import '../../app/globals.css';
import { useEffect } from 'react';
import Lenis from 'lenis'
import Intro from '@/components/layla/Intro';
import Description from '@/components/layla/Description'
import Section from '@/components/layla/Section';
import CustomCursor from '@/components/customcursor/CustomCursor';
import Footer from '@/app/footer/footer';
import './layla.css';
export default function Layla() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
        <Nav/>
        <CustomCursor />
      <Intro />
      <Description />
      <Section />
      <div className='h-screen'></div>
      <Footer />
    </main>
  );
}