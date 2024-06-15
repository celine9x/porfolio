'use client';
import styles from './work.module.css';
import { useState } from 'react';
import Project from '../../components/project/index.jsx';
import Modal from '../../components/modal/index.jsx';



const projects = [
  {
    title: "Egerie color system",
    src: "egerie-color.png",
    color: "#000000",
    description: "Tokens & Documentation",
    link: "/projects/colorsystem",
  },
  {
    title: "MFA",
    src: "mfa.jpg",
    color: "#8C8C8C",
    description: "User Research & Design",
    link: "/projects/nda",
  },
  {
    title: "Layla",
    src: "layla.jpg",
    color: "#EFE8D3",
    description: "User Research & Design",
    link: "https://www.figma.com/board/kgqsnLBSc9rZV0R2wZnZ6y/Layla---UX-Research?node-id=0-1&t=D5y77B7nLt3RXMAy-1",
  },
  {
    title: "Naraka",
    src: "naraka.jpg",
    color: "#706D63",
    description: "Packaging Design",
    link: "https://www.behance.net/gallery/72172873/NARAKA-PROJECT",
  }

]



export default function Work() {
  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <div>
      <main className={styles.mainwork}>
        <div className={styles.bodywork}>
          {
            projects.map( (project, index) => {
              return <Project index={index} title={project.title} description={project.description} color="#ffffff" link={project.link} setModal={setModal} key={index}/>
            })
          }
        </div>
        <Modal modal={modal} projects={projects}/>
      </main>
    </div>
  )
}