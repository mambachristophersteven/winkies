import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import Button from '@/components/button/Button';


export default function Completed() {
    return (
      <div className={styles.container}>
          <div className={styles.top}>
              <Logo/>
          </div>
          <div className={styles.content}>
              <div className={styles.message}>
                  <Image src='/checkmark-done.png' alt='completed signup' width={120} height={120}/>
                  <p className={styles.text}>You Are Signed Up!</p>
              </div>
              <div className={styles.button}>
                  <Button url='/menuhome' text='Alright'/>
              </div>
          </div>
      </div>
    );
  };