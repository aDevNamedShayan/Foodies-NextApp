import Link from 'next/link';
import styles from '@/app/meals/page.module.css'

export default function MealsHeader() {
  return (
    <header className={styles.header}>
        <h1>Delicious meals, created <span className={styles.highlight}>by you</span></h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and tasty!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
  );
}