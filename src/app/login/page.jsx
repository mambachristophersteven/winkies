import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import Back from '@/components/back/Back';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';


export default function Login() {
    return (
      <div className={styles.container}>
          <div className={styles.top}>
              <Logo/>
              <Back url='/entries'/>
          </div>
          <div className={styles.content}>
              <p className={styles.title}>Login</p>
              <div className={styles.loginBox}>
                  <p className={styles.subTitle}>Enter your credentials</p>
                  <div className={styles.inputFields}>
                      <Input labelfor='username' label='username' type='text' placeholder='enter username' id='username' name='username'/>
                      <Input labelfor='password' label='password' type='password' placeholder='enter password' id='password' name='password'/>
                  </div>
                  <div className={styles.button}>
                      <Button text='Login' url='/menuhome'/>
                  </div>
                  
              </div>
              <div className={styles.option}>
                  <p className={styles.optionText}>Don't have an account</p>
                  <Link href='/signup' className={styles.optionLink}>Sign up</Link>
              </div>
          </div>
      </div>
    );
  };