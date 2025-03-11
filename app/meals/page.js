import MealsHeader from '@/components/meals/meals-header/meals-header';
import MealsGrid from '@/components/meals/meals-grid/meals-grid';

import styles from './page.module.css'

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