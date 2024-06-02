import React from 'react';
import Link from 'next/link';
import styles from './style.module.css';

export default function Project({index, title, description, link, setModal}) {
    return (
        <div 
          onMouseEnter={() => {setModal({active: true, index})}} 
          onMouseLeave={() => {setModal({active: false, index})}} 
          className={styles.project}
        >
          <Link href={link}>
            <h2 style={{ color: ' #dcdcdc ', fontFamily:'EditorialNewItalic', textDecoration: 'none' }}>{title}</h2>
          </Link>
          <p style={{ color: '#dcdcdc', fontFamily:'inter' }}>{description}</p>
        </div>
    )
}