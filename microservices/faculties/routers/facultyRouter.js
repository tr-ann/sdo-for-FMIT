import { Router } from 'express'
import FacultyController from '../controllers/buildingController'

export default router = Router()

router.get('/:id', FacultyController.readById)
router.post('/:id', FacultyController.update)
router.delete('/:id', FacultyController.destroy)
router.get('/', FacultyController.readAll)
router.post('/', FacultyController.create)