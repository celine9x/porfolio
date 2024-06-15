import React, { useEffect } from 'react';
import { projects } from '../app/projects/data';
import Double from '../components/double';
import styles from '../app/projects/projects.module.css';
import '../app/globals.css';
import Nav from '../app/nav/nav';
import CustomCursor from '@/components/customcursor/CustomCursor';
import Footer from '../app/footer/footer';
import gsap from 'gsap';

export default function Projects() {
  useEffect(() => {
    let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});
    // Targeting elements by class instead of id to apply animation to all
    tl.to(".create", {y: '0%', duration: 0.7, stagger: 0.4});
  }, []);

  return (
    <main className={styles.main}>
      <CustomCursor />
      <Nav />
      <div className={styles.container}>
        <h1 className="create">I use design and technology to create</h1>
      </div>
      <div className={styles.container}>
        <h1 className="create">digital products that strike balance</h1>
      </div>
      <div className={styles.container}>
        <h1 className="create">between aesthetic and usability.</h1>
      </div>
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]} />
        <Double projects={[projects[2], projects[3]]} reversed={true} />
        <Double projects={[projects[4], projects[5]]} />
        <Double projects={[projects[6], projects[7]]} reversed={true} />
        <Footer />
      </div>
    </main>
  );
}