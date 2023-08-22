import Image from 'next/image';
import styles from './foodcard.module.css';
import Link from 'next/link';


export default function FoodCard( {image, name, price, desc} ) {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <Link href='/order/111'>
            <Image src={image} alt='meal image' width={150} height={150}/>
          </Link>
        </div>
        <div className={styles.right}>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>{price}</p>
            <p className={styles.description}>{desc}</p>
            <div className={styles.like}>
                <Image src='/like.png' alt='meal image' width={20} height={18} className={styles.unliked}/>
                <Image src='/redlike.png' alt='meal image' width={20} height={18} className={styles.liked}/>
            </div>
        </div>
    </div>
  );
};
