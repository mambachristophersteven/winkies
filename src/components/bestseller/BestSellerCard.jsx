import Image from 'next/image';
import Link from 'next/link';
import styles from './bestsellercard.module.css'
import Button1 from '../button1/Button1';

export default function BestSellerCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.title}>The Plate Christopher</p>
        <p className={styles.price}>¢45.00</p>
        <p className={styles.description}>Originating from the tribe of Ubuntu,this meal is the taste of....</p>
        <div className={styles.orderLove}>
          <Button1 url='#' text='Order Now'/>
          <div className={styles.like}>
            <Image src='/like.png' width={27} height={25} alt='like' className={styles.notLiked}/>
            <Image src='/redlike.png' width={27} height={25} alt='like' className={styles.liked}/>
          </div>
        </div>
      </div>
      <div className={styles.right}>
            <Image src='/meals/1.png' width={154} height={139} alt='like' className={styles.mealImage}/>
      </div>
     
    </div>
  );
};
