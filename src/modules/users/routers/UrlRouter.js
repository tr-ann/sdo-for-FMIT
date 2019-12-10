import { Router } from 'express'
import expressJoi from 'express-joi'
import userValidation from '../validators/user-validation'
import UrlController from '../controllers/urlController'

const router = Router()

router.get('/:id', UrlController.readById)
router.post('/:id', UrlController.update)
router.delete('/:id', UrlController.destroy)
router.get('/', UrlController.readAll)
router.post('/',  expressJoi.joiValidate(userValidation), UrlController.create)

export default router