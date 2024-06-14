import React, { useState, useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';

const projects = [
    {
        title: "Heuristic Evaluation",
        src: "heuristic.png"
    },
    {
        title: "Accessibility Enhance",
        src: "accessibility .png"
    },
    {
        title: "Light/Dark Color System",
        src: "colorsystem.png"
    },
    {
        title: "Tokenization",
        src: "tokenisation.png"
    },
    {
        title: "Documentation",
        src: "documentation.png"
    },
];

export default function Index() {
    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            (async () => {
                const { default: gsap } = await import('gsap');
                const { ScrollTrigger } = await import('gsap/ScrollTrigger');

                gsap.registerPlugin(ScrollTrigger);
                ScrollTrigger.create({
                    trigger: imageContainer.current,
                    pin: true,
                    start: "top-=100px",
                    end: document.body.offsetHeight - window.innerHeight - 50,
                });
            })();
        }
    }, []);

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>My software engineering background helps smooth collaboration with developers to establish robust code bases. </p>
                </div>
                <div className={styles.column}>
                    <p>My software engineering background enables smooth collaboration with developers to establish robust code bases. My software engineering background enables smooth collaboration with developers to establish robust code bases.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        onMouseOver={() => setSelectedProject(index)} 
                        className={styles.projectEl}
                    >
                        <h2>{project.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
