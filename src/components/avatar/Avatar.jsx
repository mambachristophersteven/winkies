import Image from 'next/image';
import styles from './avatar.module.css';
import Link from 'next/link';


export default function Avatar() {
  return (
    <Image src='/avatars/3.png' width={50} height={50} alt='winkies logo'/>
  );
};
