import { Router } from 'express'
import InfoFacultyController from '../controllers/buildingController'

const router = Router()

router.get('/:id', InfoFacultyController.readById)
router.post('/:id', InfoFacultyController.update)
router.delete('/:id', InfoFacultyController.destroy)
router.get('/', InfoFacultyController.readAll)
router.post('/', InfoFacultyController.create)

export default router