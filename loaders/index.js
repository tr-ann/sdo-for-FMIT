import initExpress from './express'
import initMiddleware from './middleware'
import initRoutes from './routes'
import initSessions from './sessions'

export default (app) => {
    initExpress(app)
    initMiddleware(app)
    initRoutes(app)
    initSessions(app)
}