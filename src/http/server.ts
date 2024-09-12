import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { createCompletion } from './routes/create-completion'
import { createGoalRoute } from './routes/create-goal'
import { getPendingGoalsRoute } from './routes/get-pending-goals'
import { getWeekSummaryRoute } from './routes/get-week-summary'
import { removeCompletionRoute } from './routes/remove-completion'

const app = fastify().withTypeProvider<ZodTypeProvider>()

// TODO - CHANGE TO CORRECT URL
app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalRoute)
app.register(createCompletion)
app.register(getPendingGoalsRoute)
app.register(getWeekSummaryRoute)
app.register(removeCompletionRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running.')
  })
