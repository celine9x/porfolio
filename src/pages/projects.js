
import { projects } from '../app/projects/data';
import Double from '../components/double';
import styles from '../app/projects/projects.module.css';
import '../app/globals.css';
import Nav from '../app/nav/nav';
import CustomCursor from '@/components/customcursor/CustomCursor';
import Footer from '@/app/footer/Footer';
export default function Projects() {
  return (
    <main className={styles.main}>
      <CustomCursor />
<Nav/>
      <h1 className={styles.mainTitle}>I use design and technology to create brands and products that perform, delight, and scale.</h1>
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]}/>
        <Double projects={[projects[2], projects[3]]} reversed={true}/>
        <Double projects={[projects[4], projects[5]]}/>
        <Double projects={[projects[6], projects[7]]} reversed={true}/>
        <Footer />
      </div>
    </main>
  )
}