import initExpress from './express'
import initMiddleware from './middleware'
import initRoutes from './routes'
import initSessions from './sessions'
import initSwagger from './swagger'
import initViews from './views'

export default (app) => {
    initExpress(app)
    initViews(app)
    initSwagger(app)
    initSessions(app)
    initRoutes(app)
    initMiddleware(app)
}