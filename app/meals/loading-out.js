import styles from './loading.module.css'

export default function MealsLoadingPage() {
  return (
    <div className={styles['loading-wrapper']}>
      <h1 className={styles.loading}>Fetching Meals...</h1>
    </div>
  );
}