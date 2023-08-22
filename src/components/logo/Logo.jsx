import Image from 'next/image';
import styles from './logo.module.css';
import Link from 'next/link';


export default function Logo() {
  return (
    <Image src='/logo3.png' width={100} height={120} alt='winkies logo'/>
  );
};
