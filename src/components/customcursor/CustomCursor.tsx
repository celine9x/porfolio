'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursorRef.current, {x: e.clientX, y: e.clientY, duration: 0.2});
    gsap.to(followerRef.current, {x: e.clientX, y: e.clientY, duration: 0.9});
  };

  useEffect(() => {
    gsap.set(cursorRef.current, {xPercent: 100, yPercent: 100});
    gsap.set(followerRef.current, {xPercent: -20, yPercent: -20});

    window.addEventListener("mousemove", moveCursor);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={followerRef} className="follower-cursor"></div>
    </div>
  );
};

export default CustomCursor;