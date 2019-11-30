import NotFoundError from '../middleware/notFound'
import ErrorHandler from '../middleware/errorHandler'

export default (app) => {
    app
        .use(NotFoundError)
        .use(ErrorHandler)
}