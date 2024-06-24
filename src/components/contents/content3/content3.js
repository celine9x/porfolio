import React, { useEffect, useRef } from 'react';
import './styles.css';

const WaterRippleEffect = () => {
  const rippleRef = useRef(null);

  useEffect(() => {
    import('./jquery.ripples-min').then(() => {
      const $ = require('jquery');
      $(rippleRef.current).ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
      });

      return () => {
        $(rippleRef.current).ripples('destroy');
      };
    });
  }, []);

  return <div className="main" ref={rippleRef}></div>;
};

export default WaterRippleEffect;