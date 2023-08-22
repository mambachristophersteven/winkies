import Image from 'next/image';
import styles from './favoritecard.module.css';
import Link from 'next/link';

// {name, image, price, desc} 

export default function FavoritesCard() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <Image src='/meals/11.png' width={120} height={117} alt='meal image'/>
        </div>
        <div className={styles.right}>
            <p className={styles.name}>Chop Lacazette</p>
            <p className={styles.price}>¢70.00</p>
            <p className={styles.desc}>Originating from the tribe of Ubuntu, this meal is the taste of....</p>
            <Image src='/Like.svg' width={20} height={18} alt='like'/>
        </div>
    </div>
  );
};
