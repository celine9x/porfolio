import React from 'react';
import Link from 'next/link';
import './nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <Link href="/" passHref legacyBehavior>
        <a className="name">CODE BY LINH NGUYEN</a>
      </Link>
      <div className="center">
      <Link href="/" passHref legacyBehavior>
          <a className="work">HOME</a>
        </Link>
        <Link href="/work" passHref legacyBehavior>
          <a className="wowrk">WORK</a>
        </Link>
        <Link href="/about" passHref legacyBehavior>
          <a className="about">ABOUT</a>
        </Link>
      </div>
      <a href="https://drive.google.com/drive/folders/12ibxA-TldzMsBBThicUjWxu3NZBoCkAJ?usp=sharing">RESUME</a>
    </div>
  );
}

export default Nav;