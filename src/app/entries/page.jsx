import Image from 'next/image';
import styles from './page.module.css';
import Logo from '@/components/logo/Logo';
import Back from '@/components/back/Back';
import Button from '@/components/button/Button';


export default function Entries() {
    return (
      <div className={styles.container}>
       <div className={styles.top}>
          <Logo/>
          <Back url='/'/>
       </div>
       <div className={styles.entryOptions}>
        <p className={styles.title}>Welcome To Winkies</p>
        <div className={styles.orderNow}>
          <p>Get straight to ordering your food</p>
          <Button url='/menuhome' text='Order Now'/>
        </div>
        <div className={styles.login}>
          <p>Have an account with us?</p>
          <Button url='/login' text='Login'/>
        </div>
        <div className={styles.signUp}>
          <p>Want to join our account holders?</p>
          <Button url='/signup' text='Sign Up'/>
        </div>
       </div>
      </div>
    );
  };