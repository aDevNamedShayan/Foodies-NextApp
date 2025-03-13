import { Suspense } from 'react';

import MealsHeader from '@/components/meals/meals-header/meals-header';
import MealsGrid from '@/components/meals/meals-grid/meals-grid';
import styles from './page.module.css'
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

async function FetchMeals() {
  const meals = await getMeals()

  return (
      <MealsGrid meals={meals} />
  )
}

export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <Suspense 
          fallback={
            <div className={styles['loading-wrapper']}>
              <h1 className={styles.loading}>Fetching Meals...</h1>
            </div>
          }
        >
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
}