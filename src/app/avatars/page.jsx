import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import Button from '@/components/button/Button';



const AvatarImagesRow1 =[
    {
        id: 1,
        src: '/avatars/1.png'
    },
    {
        id: 2,
        src: '/avatars/2.png'
    },
    {
        id: 3,
        src: '/avatars/3.png'
    },
];

const AvatarImagesRow2 =[
    {
        id: 1,
        src: '/avatars/4.png'
    },
    {
        id: 2,
        src: '/avatars/5.png'
    },
    {
        id: 3,
        src: '/avatars/6.png'
    },
];

const AvatarImagesRow3 =[
    {
        id: 1,
        src: '/avatars/7.png'
    },
    {
        id: 2,
        src: '/avatars/8.png'
    },
    {
        id: 3,
        src: '/avatars/9.png'
    },
];

const AvatarImagesRow4 =[
    {
        id: 1,
        src: '/avatars/10.png'
    },
    {
        id: 2,
        src: '/avatars/11.png'
    },
    {
        id: 3,
        src: '/avatars/12.png'
    },
];


export default function Avatars() {
    return (
      <div className={styles.container}>
          <div className={styles.top}>
              <Logo/>
          </div>
          <div className={styles.content}>
              <p className={styles.title}>Sign Up</p>
              <div className={styles.loginBox}>
                  <p className={styles.subTitle}>Choose your avatar</p>
                  <div className={styles.avatar}>
                      <div className={styles.row}>
                          {AvatarImagesRow1.map(avatar=>(
                              <Image src={avatar.src} key={avatar.id} width={50} height={50} className={styles.avatarImage}/>
                          ))}
                      </div>
                      <div className={styles.row}>
                          {AvatarImagesRow2.map(avatar=>(
                              <Image src={avatar.src} key={avatar.id} width={50} height={50} className={styles.avatarImage}/>
                          ))}
                      </div>
                      <div className={styles.row}>
                          {AvatarImagesRow3.map(avatar=>(
                              <Image src={avatar.src} key={avatar.id} width={50} height={50} className={styles.avatarImage}/>
                          ))}
                      </div>
                      <div className={styles.row}>
                          {AvatarImagesRow4.map(avatar=>(
                              <Image src={avatar.src} key={avatar.id} width={50} height={50} className={styles.avatarImage}/>
                          ))}
                      </div>
                  </div>
              </div>
              <div className={styles.button}>
                  <Button text='Finish' url='/completed'/>
              </div>
          </div>
      </div>
    );
  };