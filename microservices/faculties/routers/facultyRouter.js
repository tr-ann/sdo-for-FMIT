import { Router } from 'express'
import FacultyController from '../controllers/buildingController'

const router = Router()

router.get('/:id', FacultyController.readById)
router.post('/:id', FacultyController.update)
router.delete('/:id', FacultyController.destroy)
router.get('/', FacultyController.readAll)
router.post('/', FacultyController.create)

export default router