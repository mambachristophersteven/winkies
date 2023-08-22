import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Logo from '@/components/logo/Logo';
import Button from '@/components/button/Button';

const PaymentMethods = [
    {
        id: 1,
        image: '/payment/cash.svg',
        name: 'Cash'
    },
    {
        id: 2,
        image: '/payment/card.svg',
        name: 'Card'
    },
    {
        id: 3,
        image: '/payment/paypal.svg',
        name: 'Paypal'
    },
    {
        id: 4,
        image: '/payment/wallet.svg',
        name: 'Mobile Wallet'
    },
]

export default function Cart() {
    return (
        <PageLayout className={styles.container} active={4}>
            <div className={styles.top}>
                <Logo/>
                <Image src='/avatars/8.png' width={50} height={50} alt='avatar'/>
            </div>
            <p className={styles.title}>Checkout</p>
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
                    <p className={styles.totalHeading}>Tip</p>
                    <div className={styles.counter}>
                        <Image src='/minus.svg' width={15} height={10} alt='minus'/>
                        <p className={styles.quantity}>¢0.00</p>
                        <Image src='/add.svg' width={20} height={20} alt='plus'/>
                    </div>
                </div>
                <div className={styles.mealCost}>
                    <p className={styles.totalHeading}>Net Amount</p>
                    <p className={styles.overallPrice}>¢560.67</p>
                </div>
            </div>
            <div className={styles.paymentMethod}>
                <p className={styles.methodHeading}>Select Payment Method</p>
                <div className={styles.methods}>
                    {PaymentMethods.map(PaymentMethod=>(
                        <div className={styles.method} key={PaymentMethod.id}>
                            <Image src={PaymentMethod.image} width={40} height={40} alt='payment option'/>
                            <p className={styles.methodName}>{PaymentMethod.name}</p>
                        </div>
                    ))}                   
                </div>
            </div>
            <div className={styles.button}>
                <Button url='/payment' text='Proceed'/>
            </div>
           
        </PageLayout>
      );
};
