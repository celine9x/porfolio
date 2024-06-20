import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import './contentlayla.css';

// Dynamically import gsap and ScrollTrigger
const gsapPromise = import('gsap').then((mod) => mod.default);
const ScrollTriggerPromise = import('gsap/ScrollTrigger').then((mod) => mod.default);

const Contentlayla = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Promise.all([gsapPromise, ScrollTriggerPromise]).then(([gsap, ScrollTrigger]) => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = [
          { id: "#card-1", endTranslateX: -2000, rotate: 45 },
          { id: "#card-2", endTranslateX: -1000, rotate: -30 },
          { id: "#card-3", endTranslateX: -2000, rotate: 45 },
          { id: "#card-4", endTranslateX: -1500, rotate: -30 },
        ];

        ScrollTrigger.create({
          trigger: ".wrapper-404",
          start: "top top",
          end: "+=900vh",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            gsap.to(".wrapper-404", {
              x: `${-350 * self.progress}vw`,
              duration: 0.5,
              ease: "power3.out",
            });
          },
        });

        cards.forEach((card) => {
          ScrollTrigger.create({
            trigger: card.id,
            start: "top top",
            end: "+=1200vh",
            scrub: 1,
            onUpdate: (self) => {
              gsap.to(card.id, {
                x: `${card.endTranslateX * self.progress}px`,
                rotate: `${card.rotate * self.progress * 2}`,
                duration: 0.5,
                ease: "power3.out",
              });
            },
          });
        });
      }).catch((error) => {
        console.error("Error loading GSAP or ScrollTrigger", error);
      });
    }
  }, []);

  return (
    <div className="container">
      <nav><a href="#">Webdesign</a></nav>

      <section className="wrapper-404">
        <h1>L a y l a </h1>

        <div className="card" id="card-1">
          <img src="/images/layla1.jpg" alt="Card 1" />
        </div>
        <div className="card" id="card-2">
          <img src="/images/layla2.jpg" alt="Card 2" />
        </div>
        <div className="card" id="card-3">
          <img src="/images/layla3.jpg" alt="Card 3" />
        </div>
        <div className="card" id="card-4">
          <img src="/images/layla4.jpg" alt="Card 4" />
        </div>
      </section>
      <section className="outro">
        <h1>
          This page doesn not exist anymore... but that is okay. <br />
          We will get you right back on the track!
        </h1>
      </section>
    </div>
  );
};

export default Contentlayla;
