import React, { useEffect, useRef } from 'react';
import './loadingscreen.css';
import gsap from 'gsap';

const LoadingScreen = () => {
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);
  const loaderRef = useRef(null);
  const loader1Ref = useRef(null);
  const loader2Ref = useRef(null);
  const loadingScreenRef = useRef(null);

  useEffect(() => {
    const animateCounters = (counter, duration, delay = 0) => {
      const numHeight = counter.firstChild.clientHeight;
      const totalDistance = (counter.childElementCount - 1) * numHeight;
      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    };

    animateCounters(counter3Ref.current, 5);
    animateCounters(counter2Ref.current, 6);
    animateCounters(counter1Ref.current, 2, 4);

    gsap.to(".digit", {
      top: "-150px",
      stagger: {
          amount: 0.25,
      },
      delay: 6,
      duration: 1,
      ease: "power4.inOut", 
    });

  gsap.to(".loader-1", {
  width: 0,
  duration: 6,
  ease: "power2.inOut",
});

gsap.to(".loader-2", {
  width: 0,
  delay: 1.9,
  duration: 6,
  ease: "power2.inOut",
});


    


    gsap.to(loaderRef.current, {
       scale: 40,
        duration: 1,
        delay: 7,
        ease: "power2.inOut",
    });

    // Corrected typo in property name and reference name
    gsap.to(loadingScreenRef.current, {
        opacity: 0,
        duration: 0.5, // Corrected typo from 'druation' to 'duration'
        delay: 7.5,
        ease: "power1.inOut",
    });
  }, []); // Added missing useEffect dependency array

  return (
    <div className="loading-screen" ref={loadingScreenRef}>
      <div className="loader" ref={loaderRef}>
        <div className="loader-1 bar"></div>
        <div className="loader-2 bar"></div>
      </div>

      <div className="counter">
        <div className="counter-1 digit" ref={counter1Ref}>
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num num1offset1">1</div>
        </div>
        <div className="counter-2 digit" ref={counter2Ref}>
          {[...Array(10).keys(), 0].map((num) => (
            <div className="num" key={num}>{num}</div>
          ))}
        </div>
        <div className="counter-3 digit" ref={counter3Ref}>
          {[...Array(10).keys(), 0].map((num) => (
            <div className="num" key={num}>{num}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;