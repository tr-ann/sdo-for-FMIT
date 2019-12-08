import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import lessonsDocument from './../../microservices/lessons/swagger'
import usersDoc from '../../microservices/users/swagger/user.json'

// import papersRouters from './../../microservices/papers/routers'

const env = process.env.NODE_ENV || 'dev'

const options = {
    explorer: true
}

export default (app) => {

    if (env == 'dev') {

        // app.use('/api-docs', swaggerUi.serve)
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(usersDoc, options))
        
    }
}