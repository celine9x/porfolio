// WaterRippleEffect.js
import React, { useEffect } from 'react';
import $ from 'jquery';
import './jquery.ripples-min';
import './styles.css';

const WaterRipple = () => {
  useEffect(() => {
    $('#ripple').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });

    return () => {
      $('#ripple').ripples('destroy');
    };
  }, []);

  return <div className="main" id="ripple"></div>;
};

export default WaterRipple;
