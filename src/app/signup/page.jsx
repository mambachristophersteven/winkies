import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import Back from '@/components/back/Back';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';


export default function SignUp() {
    return (
      <div className={styles.container}>
          <div className={styles.top}>
              <Logo/>
              <Back url='/entries'/>
          </div>
          <div className={styles.content}>
              <p className={styles.title}>Sign Up</p>
              <div className={styles.loginBox}>
                  <p className={styles.subTitle}>Enter your credentials</p>
                  <div className={styles.inputFields}>
                      <Input labelfor='email' label='email' type='email' placeholder='enter email' id='email' name='email'/>
                      <Input labelfor='username' label='username' type='text' placeholder='enter username' id='username' name='username'/>
                      <Input labelfor='password' label='password' type='password' placeholder='enter password' id='password' name='password'/>
                  </div>
                  <div className={styles.button}>
                      <Button text='Next' url='/avatars'/>
                  </div>              
              </div>
              <div className={styles.option}>
                  <p className={styles.optionText}>Already have an account</p>
                  <Link href='/login' className={styles.optionLink}>Log in</Link>
              </div>
          </div>
      </div>
    );
  };