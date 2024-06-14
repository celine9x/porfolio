import React, { useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';

const phrases = [
  
 
  "My mission is to revamp Egerie's",
  "inconsistent color system, enhancing UX ",
  "& fostering better collaboration ",
  "through a cohesive and scalable design." ,
  
];

export default function Index() {
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => (
        <AnimatedText key={index}>{phrase}</AnimatedText>
      ))}
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        const { default: gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');

        gsap.registerPlugin(ScrollTrigger);

        gsap.from(text.current, {
          scrollTrigger: {
            trigger: text.current,
            scrub: true,
            start: "0px bottom",
            end: "bottom+=400px bottom",
          },
          opacity: 0,
          left: "-200px",
          ease: "power3.Out"
        });
      })();
    }
  }, []);

  return <p ref={text}>{children}</p>;
}
