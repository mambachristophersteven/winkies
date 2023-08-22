import Image from 'next/image';
import styles from './notification.module.css';
import Link from 'next/link';


export default function NotificationCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p  className={styles.message}>Your food is here. Bon appetit!</p>
        <Image src='/close.svg' width={11} height={11} alt='close button'  className={styles.closeImage}/>
      </div>
      <div className={styles.bottom}>
        <div  className={styles.date}>
          <Image src='/calendar.svg' width={20} height={20} alt='close button'  className={styles.dateImage}/>
          <p className={styles.dateContent}>Today</p>
        </div>
        <div className={styles.time}>
          <Image src='/time.svg' width={20} height={20} alt='close button'  className={styles.timeImage}/>
          <p className={styles.timeContent}>2:45pm</p>
        </div>
      </div>
    </div>
  );
};
