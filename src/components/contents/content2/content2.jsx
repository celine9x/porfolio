'use client'
import React, { useEffect } from "react";
import gsap from "gsap";
import Draggable from "../../../components/gsap/Draggable.min.js";
import "./styles.css";


const Content2 = () => {
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    const timeline = document.querySelector(".timeline");
    const scroller = document.querySelector(".scroller");
    const container = document.querySelector(".container");
    const timelineWidth = timeline.offsetWidth;
    const scrollerWidth = scroller.offsetWidth;
    const gap = parseInt(window.getComputedStyle(document.body).fontSize);

    const maxDragX = timelineWidth - scrollerWidth - 2 * gap;

    for (let i = 0; i < 50; i++) {
      const marker = document.createElement("div");
      marker.classList.add("marker");
      timeline.appendChild(marker);
    }

    Draggable.create(scroller, {
      type: "x",
      bounds: {
        minX: gap,
        maxX: timelineWidth - scrollerWidth - gap,
      },
      onDrag: function () {
        let progress = (this.x - gap) / maxDragX;
        let containerX = -400 * (timelineWidth / 100) * progress;
        gsap.to(container, {
          x: containerX,
          duration: 1,
          ease: "power3.out",
        });
      },
    });
  }, []);

  return (
    <div>

      <div className="container">
   
        <section id="section-1">
        
          <h1>
            Beyond the Veil, Threads Woven from the Shadows of Tomorrow is
            launching soon
          </h1>
          <p>
            In a world frayed at the edges, our garments emerge as relics of a
            darker future, meticulously crafted to withstand the relentless
            passage of time. Each piece is a testament to survival, an
            amalgamation of rugged functionality and stark beauty. Embrace the
            abyss with our latest collection, where fashion transcends mere
            aesthetics and becomes a fortress.
            <br />
            <br />
            Our designs whisper tales of a forgotten society, echoing through
            the threads of each garment. Dive into the depths of desolation with
            us; adorn yourself in the remnants of a world where every stitch
            counts and each fabric tells a story of resilience. Join us in
            wearing the armor of the foregone, forging ahead into the dystopian
            night.
          </p>
        </section>

        <section id="section-2">
          <div className="img img-1">
            <img src="/images/content2-1.jpg" alt="" />
          </div>
          <div className="img img-2">
            <img src="/images/content2-2.jpg" alt="" />
          </div>
          <div className="img img-3">
            <img src="/images/content2-3.jpg" alt="" />
          </div>
        </section>
        <section id="section-3">
          <div className="img img-4">
            <img src="/images/content2-4.jpg" alt="" />
          </div>
          <div className="img img-5">
            <img src="/images/content2-5.jpg" alt="" />
          </div>
          <div className="img img-6">
            <img src="/images/content2-6.jpg" alt="" />
          </div>
        </section>
        <section id="section-4">
          <h1>Echoes of Rebellion, Couture Crafted for the Last Stand</h1>
          <p>
            In the shadows of crumbling skyscrapers and forgotten streets, our
            fashion emerges as a beacon of defiance. Each piece in our
            collection is forged in the fires of rebellion, designed for the
            brave souls who dare to stand against the tide of conformity.
            <br />
            <br />
            Join the resistance styled in the essence of upheaval. Our creations
            are not just worn; they are wielded—each fabric, each seam imbued
            with the power of resilience. As the world edges closer to the
            precipice, clad yourself in our designs and become an icon of the
            revolution.
          </p>
        </section>
        <section id="section-5">
          <div className="img img-7">
            <img src="/images/content2-7.jpg" alt="" />
          </div>
          <div className="img img-8">
            <img src="/images/content2-8.jpg" alt="" />
          </div>
          <div className="img img-9">
            <img src="/images/content2-9.jpg" alt="" />
          </div>
        </section>
      </div>

      <div className="timeline">
        <div className="scroller">
          <p>[<span>Drag</span>]</p>
        </div>
      </div>
    </div>
  );
};

export default Content2;
