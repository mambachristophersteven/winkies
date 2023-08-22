import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Logo from '@/components/logo/Logo';
import OrderedMeal from '@/components/ordered/OrderedMeal';
import Button from '@/components/button/Button';

export default function Cart() {
    return (
        <PageLayout className={styles.container} active={4}>
            <div className={styles.top}>
                <Logo/>
                <Image src='/avatars/5.png' width={50} height={50} alt='avatar'/>
            </div>
            <div className={styles.ordersSection}>
                <p className={styles.title}>Orders</p>
                <div className={styles.foodCards}>
                    <OrderedMeal/>
                    <OrderedMeal/>
                </div>
            </div>
            <div className={styles.placeOrder}>
                <div className={styles.mealCost}>
                    <p className={styles.totalHeading}>Total Amount</p>
                    <p className={styles.totalPrice}>¢560.67</p>
                </div>
                <div className={styles.mealCost}>
                    <p className={styles.totalHeading}>Vat</p>
                    <p className={styles.totalPrice}>¢12.67</p>
                </div>
                <div className={styles.mealCost}>
                    <p className={styles.totalHeading}>Net Amount</p>
                    <p className={styles.overallPrice}>¢560.67</p>
                </div>
                <div className={styles.button}>
                    <Button url='/checkout' text='Place Order'/>
                </div>
            </div>
           
        </PageLayout>
      );
};
