import Image from 'next/image';
import styles from './search.module.css';
import Link from 'next/link';


export default function Search( { type, name, id, placeholder, } ) {
  return (
    <div className={styles.container}>
        <input type={type} name={name} id={id} placeholder={placeholder} className={styles.input} />
        <Image src='/search.png' width={20} height={20} className={styles.searchIcon} alt='search-icon'/>
    </div>
  )
};
