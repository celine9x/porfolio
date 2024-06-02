import React, { useEffect } from 'react';
import styles from './style.module.css';
import Intro from '../../components/Intro';
import Description from '../../components/Description';
import Projects from '../../components/Projects';
import Nav from '../../app/nav/nav';
import CustomCursor from '@/components/customcursor/CustomCursor';
import Footer from '@/app/footer/footer';
import '../../app/globals.css';

export default function ColorSystem() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();

        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');

        gsap.registerPlugin(ScrollTrigger);

        // You can now use ScrollTrigger with gsap
        ScrollTrigger.create({
          trigger: '.yourElementClass',
          pin: true,
          start: 'top top',
          end: 'bottom bottom',
        });
      })();
    }
  }, []);

  return (
    <main className={styles.main}>
      <Nav />
      <CustomCursor />
      <Intro />
      <Description />
      <Projects />
      <Footer />
    </main>
  );
}
