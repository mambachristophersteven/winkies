"use client"
import Image from 'next/image';
import styles from './menubar.module.css';
import Link from 'next/link';
import { useState } from 'react';


const MenuIcons = [
  {
    id: 1,
    url: '/menuhome',
    src: '/home.png', 
    alt: 'home',
  },
  {
    id: 2,
    url: '/favorites',
    src: '/favorite.png',
    alt: 'favorites' 
  },
  {
    id: 3,
    url: '/order',
    src: '/add.png', 
    alt: 'order',
  },
  {
    id: 4,
    url: '/cart',
    src: '/cart.png', 
    alt: 'cart',
  },
  {
    id: 5,
    url: '/notification',
    src: '/notification.png', 
    alt: 'notification',
  },
    
];

export default function Menubar({active}) {
  return (
    <div className={styles.container}>
        {MenuIcons.map(menuicon=>(
          <div key={menuicon.id} >
            <Link href={menuicon.url} className={styles.icon}>
              <Image src={menuicon.src} alt={menuicon.alt} width={32} height={30}/> 
              {active==menuicon.id && (
                <Image src='/elipse.png' alt='elipse' width={6} height={6} className={styles.currentPageIndicator}/> 
              )}
              </Link>
          </div>
            
        ))}
        
    </div>
  )
};
