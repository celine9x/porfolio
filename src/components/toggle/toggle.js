import React, { useState } from 'react';
import './toggle.css'; // Import the CSS file

function Toggle({ onToggle }) {
  const [isToggled, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!isToggled);
    onToggle(!isToggled);
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <div className={`before ${isToggled ? 'toggled' : ''}`}>
        <p>Before</p>
      </div>
      <div className={`after ${isToggled ? 'toggled' : ''}`}>
        <p>After</p>
      </div>
    </div>
  );
}

export default Toggle;