'use client'
import styles from './text1.module.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
  "For over 3 years, I've been on an exciting digital",
  "design journey, working with both new startups and",
  "established corporations. To me, websites are more",
  "than just designs; they tell the story of the product",
  "and how it helps users. I love exploring unique and",
  "creative interactions, but what I care about also is",
  "making sure the handoff to developers is smooth and easy.",
]

export default function Text1() {

  return (
    <div className={styles.container}>
      <MaskText/>
   
    </div>
  )
}

export function MaskText() {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className={styles.body}>
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className={styles.lineMask}>
            <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )
}