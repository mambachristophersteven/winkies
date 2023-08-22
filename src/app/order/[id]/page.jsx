import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Back from '@/components/back/Back';
import WhiteBack from '@/components/whiteback/WhiteBack';
import Button from '@/components/button/Button';

const Ingredients = [
  {
    id: 1,
    ingredient: 'rice',
  },
  {
    id: 2,
    ingredient: 'oil',
  },
  {
    id: 3,
    ingredient: 'pepper',
  },
  {
    id: 4,
    ingredient: 'cabbage',
  },
  {
    id: 5,
    ingredient: 'spinach',
  },
  {
    id: 6,
    ingredient: 'carrot',
  },
  
  
];


export default function OrderMeal() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <WhiteBack url='/order'/>
        <Link href='/cart'>
          <Image src='/cart.png' width={30} height={30} alt='cart'/>
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.MealContainer}>
          <Image src='/meals/6.png' width={250} height={250} alt='meal image'/>
          <div className={styles.like}>
            <Image src='/like.png' width={27} height={25} alt='like icon' className={styles.unliked}/>
            <Image src='/redlike.png' width={27} height={25} alt='like icon' className={styles.liked}/>
          </div>
          <div className={styles.quantityCounter}>
            <Image src='/minus.svg' width={20} height={25} alt='minus'/>
            <p className={styles.quantity}>01</p>
            <Image src='/plus.png' width={27} height={25} alt='add'/>
          </div>    
          <div className={styles.namePrice}>
            <p className={styles.name}>Chop Lacazette</p>
            <p className={styles.price}>¢78.00</p>
          </div>     
          <div className={styles.description}>
            <p className={styles.descTitle}>Description</p>
            <p className={styles.descText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam et molestiae harum non quibusdam, sunt provident recusandae qui optio numquam vel quae molestias voluptatum nam a fugit iste vero!</p>
          </div>
          <div className={styles.ingredients}>
            <p className={styles.ingredientsTitle}>Ingredients</p>
            <div className={styles.ingredientsContent}>
              {Ingredients.map(Ingredient=>(
                <div className={styles.ingredient} key={Ingredient.id}>
                  <p className={styles.ingredientName}>{Ingredient.ingredient}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.total}>
            <p className={styles.totalTitle}>Total Amount</p>
            <p className={styles.totalPrice}>¢78.00</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button url='/menuhome' text='Add To Cart'/>
          </div>
        </div>
      </div>
    </div>
  );
};
