'use client';
import React from 'react';
import styles from './illustration.module.css';
import Break from '@/app/break/break';
import Spline from '@splinetool/react-spline';
const Illustration = () => {
  return (
    <div className={styles.container}>
        <Break text="work"/>
        <div className={styles.row}> 
     

          <div className={styles.bigbox}>
          <a href="/work/colorsystem" target="_blank" rel="noopener noreferrer">
        <video src="../videos/Layla.mp4"  autoPlay muted loop />
        </a>
       
</div>

            <div className={styles.smallbox}> 
            
            <a href="https://www.figma.com/design/LlnEbbG7AxeWMohqhv6eZQ/Trekking?node-id=303-380&t=hDDrUzk2E6UOK3v4-1" target="_blank" rel="noopener noreferrer">
            <video src="../videos/yotrek.mp4"  autoPlay muted loop /></a>
  
           </div>
        </div>   
        <div className={styles.row}> 
            <div className={styles.bigbox}> 
            
                

       <a href="https://www.figma.com/design/TX0n0qLGkn6Yvd8ckYpuOp/projet?node-id=270-25552&t=BTJVXnmWlYtwOoHJ-1" target="_blank" rel="noopener noreferrer">
  
  <video src="../videos/mhk.mp4" autoPlay muted loop /> 

</a>
                
                
                </div>
            <div className={styles.bigbox}>

       <a href="https://www.behance.net/gallery/72189855/DEPRESSION" target="_blank" rel="noopener noreferrer">
  
        <video src="../videos/poster.mp4" autoPlay muted loop /> 
  
</a>
           
            </div>
           
        </div>   
        <p className={styles.selected}>case study </p>
    </div>
  );
};

export default Illustration;