import styles from './styles.module.scss';
import Picturea from '../../../public/images/e.jpg';
import Pictureb from '../../../public/images/b.jpg';
import Picturec from '../../../public/images/c.jpg';
import Pictured from '../../../public/images/d.jpg'
import Picturee from '../../../public/images/a.jpg'
import Picturef from '../../../public/images/f.jpg'
import Pictureg from '../../../public/images/g.png'
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picturea,
            scale: scale4
        },
        {
            src: Pictureb,
            scale: scale5
        },
        {
            src: Picturec,
            scale: scale6
        },
        {
            src: Pictured,
            scale: scale5
        },
        {
            src: Picturee,
            scale: scale6
        },
        {
            src: Picturef,
            scale: scale8
        },
        {
            src: Pictureg,
            scale: scale9
        }
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}