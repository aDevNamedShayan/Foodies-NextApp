'use client'

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An unexpected error occurred!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}