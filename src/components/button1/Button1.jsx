import Image from 'next/image';
import styles from './button1.module.css';
import Link from 'next/link';


export default function Button1( { text, url } ) {
  return (
    <Link href={url}>
        <button className={styles.container}>{text}</button>
    </Link>
  )
};