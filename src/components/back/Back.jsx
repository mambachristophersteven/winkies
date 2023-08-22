import Image from 'next/image';
import Link from 'next/link';
import styles from './back.module.css'

export default function Back( {url} ) {
  return (
    <div className={styles.container}>
      <Link href={url}>
        <Image src='/back.png' alt='back' width={15} height={18} />
      </Link>
     
    </div>
  );
};
