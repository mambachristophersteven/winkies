import Image from 'next/image';
import Link from 'next/link';
import styles from './notfound.module.css'
import Button from '@/components/button/Button';


export default function Four0hFour() {
  return (
    <div className={styles.container}>
      <Image src='/errorImage.png' width={230} height={230} alt='error'/>
      <p className={styles.number}>404</p>
      <p className={styles.message}>This page cannot be found</p>
    </div>
  );
};
