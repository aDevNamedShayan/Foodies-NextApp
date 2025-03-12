import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  // throw new Error('Failed to load meals')

  return db.prepare('SELECT * FROM meals').all()
}

export function getMealDetail(slug) {
  // await new Promise(resolve => setTimeout(resolve, 2000))

  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)  //<p>Normal text</p><script>alert("hack")</script> set this as instructions and comment this line😈
}