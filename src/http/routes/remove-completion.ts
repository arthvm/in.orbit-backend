import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { removeCompletion } from '../../functions/remove-completion'

export const removeCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/remove-completions',
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async request => {
      const { goalId } = request.body

      await removeCompletion({
        goalId,
      })
    }
  )
}
