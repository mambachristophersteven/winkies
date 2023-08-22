import Image from 'next/image';
import styles from './ordered.module.css';
import Link from 'next/link';


export default function OrderedMeal() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <Image src='/meals/6.png' width={150} height={150} alt='meal image'/>
        </div>
        <div className={styles.right}>
            <p className={styles.name}>St.Agbenyegah</p>
            <p className={styles.price}>¢80.00</p>
            <div className={styles.counter}>
                <Image src='/minus.svg' width={15} height={10} alt='minus'/>
                <p className={styles.quantity}>07</p>
                <Image src='/add.svg' width={20} height={20} alt='plus'/>
            </div>
            <div className={styles.total}>
                <Image src='/close.svg' width={13} height={13} alt='close' className={styles.close}/>
                <p className={styles.totalAmount}>¢269.00</p>
            </div>
        </div>
    </div>
  );
};
