import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions } from '../db/schema'

export async function removeCompletion({ goalId }: { goalId: string }) {
  await db.delete(goalCompletions).where(eq(goalCompletions.id, goalId))
}
