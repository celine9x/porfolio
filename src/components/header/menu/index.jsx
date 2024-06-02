import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../anim';
import styles from './style.module.scss';
import Link from './link';
import { useState } from 'react';

const menu = [
  {
    title: "Work",
    description: "To See Everything",
    images: ['projects1.jpg', 'projects2.jpg'],
    link: "/projects"
  },
  {
    title: "About",
    description: "Beyond a portfolio",
    images: ['agence1.jpg', 'agence2.jpg'],
    link: "/about"
  },
  {
  title: "Contact",
description: "To Send a FAX",
images: ['contact1.jpg', 'contact2.jpg'],
link: "https://drive.google.com/drive/folders/12ibxA-TldzMsBBThicUjWxu3NZBoCkAJ?usp=sharing"
  }
]

export default function index({closeMenu}) {

  return (
    <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">

        <div className={styles.header}>
          <motion.svg 
            variants={slideLeft} 
            {...mountAnim}
            onClick={() => {closeMenu()}} 
            width="68" 
            height="68" 
            viewBox="0 0 68 68" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.5L67 67" stroke="white"/>
              <path d="M66.5 1L0.999997 66.5" stroke="white"/>
          </motion.svg>
        </div>

        <div className={styles.body}>
          {
            menu.map( (el, index) => {
              return <Link data={el} index={index} key={index}/>
            })
          }
        </div>

        <motion.div 
          variants={opacity} 
          {...mountAnim} 
          custom={0.5} 
          className={styles.footer}>
         
         <a href="https://www.linkedin.com/in/linettenguyen/" target="_blank" rel="noopener noreferrer">IN</a>
          <a href="https://www.behance.net/linhnguyen96" target="_blank" rel="noopener noreferrer">BE</a>
          <a href="https://www.linkedin.com/in/linettenguyen/" target="_blank" rel="noopener noreferrer">NO</a>
        </motion.div>

    </motion.div>
  )
}