import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Logo from '@/components/logo/Logo';
import Avatar from '@/components/avatar/Avatar';
import FavoritesCard from '@/components/favoriteCard/FavoritesCard';


export default function Favorites() {
  return (
    <PageLayout className={styles.container} active={2}>
        <div className={styles.top}>
            <Logo/>
            <Avatar/>
        </div>
        <div className={styles.heading}>
            <p className={styles.headingText}>Favorites</p>
            <p className={styles.subHeadingText}>You have 3 favorite foods</p>
        </div>
        <div className={styles.favorites}>
            <FavoritesCard/>
            <FavoritesCard/>
            <FavoritesCard/>
            <FavoritesCard/>
            <FavoritesCard/>
        </div>
    </PageLayout>
  );
};
