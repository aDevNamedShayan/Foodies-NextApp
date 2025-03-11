export default function MealsDetailPage({ params }) {
  return (
    <h1>
      Dynamic meals
      <p>
        {params.mealSlug}
      </p>
    </h1>
  );
}