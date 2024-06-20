'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'intersection-observer';
import './explain.css';
import Image from 'next/image';
import Footer from '@/app/footer/footer';

const Explain = () => {
  useEffect(() => {
    const initGSAP = async () => {
     
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const { default: Lenis } = await import('lenis');

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis();

      lenis.on('scroll', (e) => {
        console.log(e);
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      const services = gsap.utils.toArray('.service');

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };

      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const service = entry.target;
            const imgContainer = service.querySelector('.img');

            ScrollTrigger.create({
              trigger: service,
              start: 'bottom bottom',
              end: 'top top',
              scrub: true,
              onUpdate: (self) => {
                let progress = self.progress;
                let newWidth = 30 + 70 * progress;
                gsap.to(imgContainer, {
                  width: newWidth + '%',
                  duration: 0.1,
                  ease: 'none',
                });
              },
            });

            ScrollTrigger.create({
              trigger: service,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
              onUpdate: (self) => {
                let progress = self.progress;
                let newHeight = 150 + 300 * progress;
                gsap.to(service, {
                  height: newHeight + 'px',
                  duration: 0.1,
                  ease: 'none',
                });
              },
            });

            observer.unobserve(service);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      services.forEach((service) => {
        observer.observe(service);
      });

      return () => {
        lenis.destroy();
        observer.disconnect();
        gsap.killTweensOf('.service');
      };
    };

    // Ensure the code runs only on the client side
    if (typeof window !== 'undefined') {
      initGSAP();
    }
  }, []);

  return (
    <div className="container">
      <section className="hero">
        
      </section>
      <section className="services">
        <div className="servicesheader">
          <div className="col"></div>
          <div className="col"><h1>All Services</h1></div>
        </div>
        <div className="service">
          <div className="serviceinfo">
            <h1>Color analysis</h1>
            <p>
            I analysed Egerie existing color design system to identify inconsistencies and areas for improvement. The analysis reveals a lack of coherence and scalability in the current system, leading to confusion and inefficiencies in design and development processes.<br></br>
            Then, I needed to determine which colors were essential to keep and which could be removed if they weren not necessary or if their shades were redundant with others. From these colors, I organized and classified them into base colors to lay the foundation for building palettes.
            </p>
          </div>
          <div className="serviceimg">
            <div className="img">
              <img src="/images/auditcolor.jpg" alt="Web Development" />
            </div>
          </div>
        </div>
        <div className="service">
          <div className="serviceinfo">
            <h1>Palette creation</h1>
            <p>
            With the base colors I have, I utilize HSB and tools to generate palettes that ensure consistent brightness levels. This structured color system includes a primary palette, accents, and shades/tints, providing flexibility for application.
            </p>
          </div>
          <div className="serviceimg">
            <div className="img">
              <img src="/images/palettecreation.jpg" alt="App Development" />
            </div>
          </div>
        </div>
        <div className="service">
          <div className="serviceinfo">
            <h1>Testing</h1>
            <p>
            With a V1 in hand, it was time to put our colors to the test. I took existing screens Figma and applied the new color scheme for through validation, to check on the harmonise colors, states of components, if the branding well reflex on our platform. <br></br>
            
            </p>
          </div>
          <div className="serviceimg">
            <div className="img">
              <img src="/images/testing.png" alt="Digital Marketing" />
            </div>
          </div>
        </div>
        <div className="service">
          <div className="serviceinfo">
            <h1>Light & Dark mode </h1>
            <p>
            I tested the color palette on components for usability in light and dark modes, ensuring they conveyed the right meanings for an improved user experience.
            <br></br>
            I pick shades from designed palette and shadows to indicate differnet levels of elevation in both light and darkmode
            </p>
          </div>
          <div className="serviceimg">
            <div className="img">
              <img src="/images/lightdark.jpg" alt="Cloud Solutions" />
            </div>
          </div>
        </div>
        <div className="service">
          <div className="serviceinfo">
            <h1>Tokenisation</h1>
            <p>
            Naming is hard, and it is even harder when it comes to color tokens as they represent small, repeatable design decisions. Every single component is broken down into such tokens. <br></br> 
              During this phase, I am extensively collaborating with the development team to establish an optimal naming convention for tokens. This ensures that when implementing the new color system, it minimizes the workload for both development and design teams while ensuring clarity in the purpose of each token.
            </p>
          </div>
          <div className="serviceimg">
            <div className="img">
              <img src="/images/namingtoken.png" alt="IT Consultancy" />
            </div>
          </div>
        </div>
        <div className="service">
          <div className="serviceinfo">
            <h1>Code base setup</h1>
            <p>
            I have software engineering base so I worked closely with developers to establish tokens code bases. <br></br> I needed to review the existing codebase to identify areas that needed to be updated to accommodate the new color system. 
            </p>
          </div>
          <div className="serviceimg">
            <div className="img">
    <img src="/images/tokenisation.png" alt="IT Consultancy" />
            </div>
          </div>
        </div>
      

        
      
      </section>
      <Footer />

    </div>
  );
};

export default Explain;
