import React from 'react';
import './nav.css';
import Link from 'next/link';

function toggleResponsive() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const Nav = () => {
  return (
    <div className="topnav" id="myTopnav">
      {/* Directly use Link without <a> tag */}
      <Link href="/">HOME</Link>
      <Link href="/work">WORK</Link>
      <Link href="/about">ABOUT</Link>
      <a href="/images/CV_Linh Nguyen_FR.pdf" download="CV_Linh Nguyen_FR.pdf">RÉSUMÉ</a>
      <a href="javascript:void(0);" className="icon" onClick={toggleResponsive}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#ffff"/>
        </svg>
      </a>
    </div>
  );
}

export default Nav;
