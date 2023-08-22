"use client"
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import Search from '@/components/search/Search';
import Menubar from '@/components/menubar/Menubar';
import FoodCard from '@/components/foodcard/FoodCard';
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';


const Categories = [
    {
        id: 1,
        src: '/categories/all.png',
        alt: 'all foods',
    },
    {
        id: 2,
        src: '/categories/hamburger.png',
        alt: 'hamburgers',
    },
    {
        id: 3,
        src: '/categories/hotdogs.png',
        alt: 'hotdogs',
    },
    {
        id: 4,
        src: '/categories/salads.png',
        alt: 'salads',
    },
    {
        id: 5,
        src: '/categories/fries.png',
        alt: 'fries',
    },
];

const CategoriesInBox = [
    {
        id: 1,
        src: '/categories/all.png',
        alt: 'all foods',
        name: 'All Foods',
    },
    {
        id: 2,
        src: '/categories/hamburger.png',
        alt: 'hamburgers',
        name: 'hamburgers',
    },
    {
        id: 3,
        src: '/categories/hotdogs.png',
        alt: 'hotdogs',
        name: 'hot dogs',
    },
    {
        id: 4,
        src: '/categories/salads.png',
        alt: 'salads',
        name: 'salads',
    },
    {
        id: 5,
        src: '/categories/fries.png',
        alt: 'fries',
        name: 'fries',
    },
    {
        id: 6,
        src: '/categories/breakfast.png',
        alt: 'breakfast',
        name: 'breakfast',
    },
    {
        id: 7,
        src: '/categories/brunch.png',
        alt: 'brunch',
        name: 'Brunch',
    },
    {
        id: 8,
        src: '/categories/chef choice.png',
        alt: 'chef choice',
        name: 'chef choice',
    },
    {
        id: 9,
        src: '/categories/dinner.png',
        alt: 'dinner',
        name: 'dinner',
    },
    {
        id: 10,
        src: '/categories/juices.png',
        alt: 'juices',
        name: 'juices',
    },
    {
        id: 11,
        src: '/categories/pizzas.png',
        alt: 'pizza',
        name: 'pizza',
    },
    {
        id: 12,
        src: '/categories/shakes.png',
        alt: 'shakes',
        name: 'shakes',
    },
    {
        id: 13,
        src: '/categories/lunch.png',
        alt: 'lunch',
        name: 'lunch',
    },
];




export default function Order() {

    const [displayBox, setDisplayBox] = useState(false);

    function showBox(){
        setDisplayBox(true);
        //console.log('box is clicked');
    }


  return (
    <PageLayout className={styles.container} active={3}>
        {
            displayBox && (
                <div className={styles.chooseCategoryBox}>
                    <div className={styles.boxTop}>
                        <p className={styles.boxTopHeading}>Categories</p>
                        <Image onClick={()=>setDisplayBox(false)} className={styles.close} src='/close.svg' alt='avatar' width={13} height={13}/>
                    </div>
                    <div className={styles.boxContent}>
                        {CategoriesInBox.map(CategoryInBox=>(
                            <div className={styles.categoryInBoxContainer} key={CategoryInBox.id}>
                                <Image src={CategoryInBox.src} width={40} height={40} alt={CategoryInBox.alt}/>
                                <p className={styles.categoryInBoxName}>{CategoryInBox.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
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
            <div className={styles.orderText}>Browse through our collection of meals</div>
        </div>
        <div className={styles.searchContainer}>
            <Search label='' type='search' placeholder='search foods' name='search' id='search'/>
        </div>
        <div className={styles.chooseCategorySection}>
            <div className={styles.heading}>
                <p className={styles.title}>Categories</p>
                <Image src='/categories.png' width={25} height={25} alt='choose category' className={styles.chooseCategory} onClick={showBox}/>
            </div>
            <div className={styles.categoriesContainer}>
                {Categories.map(Category=>(
                    <div className={styles.categoryContainer} key={Category.id}>
                        <Image src={Category.src} width={40} height={40} alt={Category.alt}/>
                        <Image src='/categories/indicator.png' width={7} height={7} alt='current category indicator' className={styles.currentCategoryIndicator}/>
                    </div>
                ))}
            </div>
        </div>
        <div className={styles.foods}>
            <div className={styles.foodsHeading}>
                <div className={styles.left}>
                    <div className={styles.nameNumber}>
                        <p className={styles.nameOfCategory}>All Foods</p>
                        <p className={styles.numberOfFoods}>2,453</p>
                    </div>
                    <p className={styles.talk}>Explore all our meals and quisines</p>
                </div>
                <div className={styles.right}>
                    <Image src='/categories/list.png' alt='sort categories' width={25} height={25}/>
                </div>
            </div>
            <div className={styles.foodCards}>
                <FoodCard image='/meals/4.png' name='Karl Mucho' price ='¢45.00' desc='Originating from the tribe of Ubuntu, this meal is the taste of....'/>
                <FoodCard image='/meals/5.png' name='Chop Lacazette' price ='¢65.00' desc='Originating from the tribe of Ubuntu, this meal is the taste of....'/>
                <FoodCard image='/meals/5.png' name='Chop Lacazette' price ='¢65.00' desc='Originating from the tribe of Ubuntu, this meal is the taste of....'/>
                <FoodCard image='/meals/6.png' name='Jenny Jenny' price ='¢50.00' desc='Originating from the tribe of Ubuntu, this meal is the taste of....'/>
                <FoodCard image='/meals/3.png' name='Cisco' price ='¢50.00' desc='Originating from the tribe of Ubuntu, this meal is the taste of....'/>
                <FoodCard image='/meals/7.png' name='Dear Mama' price ='¢50.00' desc='Originating from the tribe of Ubuntu, this meal is the taste of....'/>
                <FoodCard image='/meals/9.png' name='Lazy Bones' price ='¢50.00' desc='Originating from the tribe of Ubuntu, this meal is the taste of....'/>
                <FoodCard image='/meals/9.png' name='Lazy Bones' price ='¢50.00' desc='Originating from the tribe of Ubuntu, this meal is the taste of....'/>
                <FoodCard image='/meals/9.png' name='Lazy Bones' price ='¢50.00' desc='Originating from the tribe of Ubuntu, this meal is the taste of....'/>
                <FoodCard image='/meals/9.png' name='Lazy Bones' price ='¢50.00' desc='Originating from the tribe of Ubuntu, this meal is the taste of....'/>
            </div>
        </div>
    </PageLayout>
  );
};
