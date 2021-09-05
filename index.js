require('dotenv').config()

const fastify = require('fastify')({ logger: false })
const mongoose = require('mongoose')
const routes = require('./routes')

fastify.register(require('fastify-cors'), {
    origin: 'http://localhost/'
})

fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {title: 'fastify-api'}
    }
})

mongoose.connect(`mongodb+srv://abcd123:${process.env.MONGO_PASSWORD}@cluster0.fj11r.mongodb.net/dumpster_fire?retryWrites=true&w=majority`)
    .then(() => console.log('Connected to Database'))
    .catch(err => console.log(err))

routes.map(route => {
    fastify.route(route)
})


const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()