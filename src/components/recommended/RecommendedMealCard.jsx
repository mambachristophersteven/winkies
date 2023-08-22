import Image from 'next/image';
import styles from './recommendedmealcard.module.css';
import Link from 'next/link';


export default function RecommendedMealCard() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.like}>
                <Image src='/redlike.png' width={22} height={20} alt='like' className={styles.liked}/>
                <Image src='/like.png' width={22} height={20} alt='like' className={styles.unliked}/>
            </div>
            <div className={styles.foodTitle}>
                <p className={styles.name}>lonely chips</p>
                <p className={styles.price}>¢20.00</p>
            </div>
            <p className={styles.foodDesc}>Originating from the tribe of Ubuntu,this meal is the taste of....</p>
        </div>
        <div className={styles.right}>
            <Image src='/meals/2.png' width={140} height={120} alt='meal image'/>
        </div>
    </div>
  );
};
