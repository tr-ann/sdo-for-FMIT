import { Router } from 'express'
import UrlController from '../controllers/urlController'

const router = Router()

router.get('/:id', UrlController.readById)
router.post('/:id', UrlController.update)
router.delete('/:id', UrlController.destroy)
router.get('/', UrlController.readAll)
router.post('/', UrlController.create)

export default router