import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import lessonsDocument from './../../modules/lessons/swagger'
import facultiesDocument from './../../modules/faculties/swagger'
import papersDocument from './../../modules/papers/swagger'
import usersDoc from '../../modules/users/swagger/user.json'

const env = process.env.NODE_ENV || 'dev'

const options = {
    explorer: true
}

export default (app) => {

    if (env == 'dev') {
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(usersDoc, options))   
    }
}