import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Logo from '@/components/logo/Logo';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';

export default function Confirm() {
  return (
    <PageLayout className={styles.container} active={4}>
        <div className={styles.top}>
            <Logo/>
            <Image width={50} height={50} alt='avatar' src='/avatars/7.png'/>
        </div>
        <div className={styles.heading}>
            <p className={styles.headingText}>Confirm Number</p>
        </div>
        <div className={styles.confirmNumberBox}>
            <p className={styles.confirmText}>Enter confirmation code we sent to your number</p>
            <div className={styles.input}>
                <Input name='verification' id='verification' placeholder='verification code' type='number'/>
            </div>
        </div>
        <div className={styles.button}>
            <Button url='/successful' text='Proceed'/>
        </div>
    </PageLayout>
  );
};
