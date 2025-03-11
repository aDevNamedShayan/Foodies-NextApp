import MealsHeader from '@/components/meals/meals-header/meals-header';
import styles from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid/meals-grid';

export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}