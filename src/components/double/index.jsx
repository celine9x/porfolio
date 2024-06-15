'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef } from 'react';

export default function Index({ projects, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent += xPercentDelta * speed;

    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    firstImage.current.style.width = `${firstImagePercent}%`;
    secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(xPercent) === Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div onMouseMove={(e) => { manageMouseMove(e); }} className={styles.double}>
      <a href={projects[0].link} ref={firstImage} className={styles.imageContainer} style={{ color: 'inherit', textDecoration: 'none', outline: 'none' }}>
        <div className={styles.stretchyWrapper}>
          <Image
            src={`/images/${projects[0].src}`}
            fill={true}
            alt={"image"}
          />
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
        </div>
      </a>
      <a href={projects[1].link} ref={secondImage} className={styles.imageContainer} style={{ color: 'inherit', textDecoration: 'none', outline: 'none' }}>
        <div className={styles.stretchyWrapper}>
          <Image
            src={`/images/${projects[1].src}`}
            fill={true}
            alt={"image"}
          />
        </div>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          <p>{projects[1].year}</p>
        </div>
      </a>
    </div>
  );
}