import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Back from '@/components/back/Back';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';

const Networks = [
  {
    id: 1,
    name: "MTN",
    image: '/networks/mtn.png',
    alt: 'MTN',
  },
  {
    id: 2,
    name: "Airteltigo",
    image: '/networks/airteltigo.png',
    alt: 'Airteltigo',
  },
  {
    id: 3,
    name: "Vodafone",
    image: '/networks/vodafone.png',
    alt: 'Vodafone',
  },
];


export default function Payment() {
  return (
  <PageLayout className={styles.container} active={4}>
    <div className={styles.top}>
      <Back url='/checkout'/>
      <Image width={50} height={50} src='/avatars/3.png' alt='avatar'/>
    </div>
    <div className={styles.paymentOption}>
      <div className={styles.paymentImage}>
        <Image width={40} height={40} src='/payment/momo.svg' alt='mobile wallet'/>
      </div>
      <p className={styles.paymentName}>Mobile Wallet</p>
    </div>
    <div className={styles.networkProviders}>
      <p className={styles.selectHeading}>Select Network Provider</p>
      <div className={styles.networksContainer}>
        {Networks.map(Network =>(
          <div className={styles.networkContainer} key={Network.id}>
            <div className={styles.networkImage}>
              <Image width={50} height={40} src={Network.image} alt={Network.alt}/>
            </div>
            <p className={styles.networkName}>{Network.name}</p>
          </div>
        ))}
        
      </div>
    </div>
    <div className={styles.enterNumber}>
      <p className={styles.numberHeading}>Enter Mobile Number</p>
      <div className={styles.input}>
        <Input type='number' name='momo-number' id='momo-number' placeholder='mobile wallet number'/>
      </div>
    </div>
    <div className={styles.button}>
      <Button url='/confirm' text='Proceed'/>
    </div>
  </PageLayout>
  );
};
