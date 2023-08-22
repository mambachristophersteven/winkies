import Image from 'next/image';
import styles from './whiteback.module.css';
import Link from 'next/link';


export default function WhiteBack( {url} ) {
  return (
    <div className={styles.container}>
      <Link href={url}>
        <Image src='/whiteback.png' alt='back' width={15} height={18} />
      </Link>   
    </div>
  );
};
