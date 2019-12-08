import initExpress from './express'
import initMiddleware from './middleware'
import initRoutes from './routes'
import initSessions from './sessions'
import initSwagger from './swagger'

export default (app) => {
    initExpress(app)
    initSwagger(app)
    initSessions(app)
    initRoutes(app)
    initMiddleware(app)
}