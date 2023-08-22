import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Menubar from '@/components/menubar/Menubar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src='/logo3.png' width={150} height={180} alt='winkies logo'/>
      <div className={styles.welcomeTalk}>
        <p className={styles.title}>The best in town</p>
        <p className={styles.motto}>Tasty meals just for you. Let your taste buds explode.</p>
      </div>
      <Button url='/entries' text='Get Started'/>
    </div>
  )
}