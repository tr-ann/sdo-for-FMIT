import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

const env = process.env.NODE_ENV || 'dev'

const options = {
    explorer: true
}

export default (app) => {
    if (env == 'dev') {
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
    }
}