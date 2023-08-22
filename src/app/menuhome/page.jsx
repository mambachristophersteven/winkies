import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import Search from '@/components/search/Search';
import Menubar from '@/components/menubar/Menubar';
import BestSellerCard from '@/components/bestseller/BestSellerCard';
import RecommendedMealCard from '@/components/recommended/RecommendedMealCard';


export default function MenuHome() {
    return (
      <div className={styles.container}>
          <div className={styles.top}>
              <Logo/>
              <Link href='#'>
                  <Image src='/avatars/9.png' alt='avatar' width={50} height={50}/>
              </Link>
          </div>
          <div className={styles.welcomeMessage}>
              <div className={styles.name}>
                  <p className={styles.username}>Hello, Afi</p>
                  <p className={styles.tableName}>Table 7</p>
              </div>
              <div className={styles.orderText}>Get down to ordering something, anything</div>
          </div>
          <div className={styles.searchContainer}>
              <Search label='' type='search' placeholder='search foods' name='search' id='search'/>
          </div>
          <div className={styles.bestSellingSection}>
                <div className={styles.sectionIntro}>
                    <p className={styles.introHeading}>Best Selling Today</p>
                    <p className={styles.introDesc}>This is what people are buying today</p>
                </div>
                <div className={styles.foodCardContainer}>
                    <BestSellerCard/>
                </div>
          </div>
          <div className={styles.recommendedSection}>
                <div className={styles.sectionIntro}>
                    <p className={styles.introHeading}>Recommended</p>
                    <p className={styles.introDesc}>We recommend these meals for you. Try them</p>
                </div>
                <div className={styles.recommendedfoodCardContainer}>
                    <RecommendedMealCard/>
                    <RecommendedMealCard/>
                </div>
          </div>
          <Menubar active={1}/>
      </div>
    );
  };