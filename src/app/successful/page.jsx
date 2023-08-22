import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Logo from '@/components/logo/Logo';
import Button from '@/components/button/Button';


export default function Succesful() {
  return (
    <PageLayout className={styles.container} active={4}>
        <div className={styles.top}>
            <Logo/>
        </div>
        <div className={styles.payment}>
            <Image width={120} height={105} alt='checkmark' src='/checkmark-done.png'/>
            <p className={styles.paymentText}>Payment Successful</p>
        </div>
        <div className={styles.button}>
            <Button url='/order' text='Continue'/>
        </div>
    </PageLayout>
  );
};
