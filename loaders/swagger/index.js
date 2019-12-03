import swaggerUi from 'swagger-ui-express'
const swaggerDocument = require('./swagger.json')

export default (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}