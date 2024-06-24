'use client';

import Image from 'next/image';
import styles from './about.module.css';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Button from '../../components/button/button';
import WaterRipple from '@/components/contents/content3/content3';

import Break from '../break/break';
import Link from 'next/link';

export default function About() {
  const stickyElement = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const directionRef = useRef(-1);
  const xPercentRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => directionRef.current = e.direction * -1
      },
      x: "-500px",
    });

    const animate = () => {
      if (xPercentRef.current < -100) {
        xPercentRef.current = 0;
      } else if (xPercentRef.current > 0) {
        xPercentRef.current = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercentRef.current });
      gsap.set(secondText.current, { xPercent: xPercentRef.current });
      requestAnimationFrame(animate);
      xPercentRef.current += 0.1 * directionRef.current;
    };

    requestAnimationFrame(animate);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.main}>
      <Break text="About me" />

      <Link href="/about">
        <div className={styles.right}>
          <p>More</p>
        </div>
      </Link>
      <div className={styles.center}>
      <WaterRipple />
        {/*<Image 
          className={styles.image}
          src="/images/me.png"
          alt="Me"
          width={500} // Set appropriate width
          height={500} // Set appropriate height
        />*/}
      </div>
      <div className={styles.left}>
        <p>I&apos;m based in Toulon.<br /> I have 3 years experience <br />in designing digital products.</p>
      </div>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Linh nguyen -</p>
          <p ref={secondText}>Linh nguyen -</p>
        </div>
      </div>
    </main>
  );
}
