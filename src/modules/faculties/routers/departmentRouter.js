import { Router } from 'express'
import DepartmentController from '../controllers/departmentController'

const router = Router()

router.get('/:id', DepartmentController.readById)
router.post('/:id', DepartmentController.update)
router.delete('/:id', DepartmentController.destroy)
//router.get('/', DepartmentController.readAll)
router.post('/', DepartmentController.create)

router.get("/", function(req, res){
    res.render("index", {title:'qwe' });
});

export default router