'use client';
import Nav from '../../app/nav/nav';
import '../../app/globals.css';
import { useEffect } from 'react';
import Lenis from 'lenis'
import CustomCursor from '@/components/customcursor/CustomCursor';
import Footer from '@/app/footer/footer';
import './layla.css';
import Explain from '@/components/layla/explain';
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
        <Explain  />
        

      <Footer />
    </main>
  );
}