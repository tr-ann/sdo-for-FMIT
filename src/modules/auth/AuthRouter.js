import { Router } from 'express'
import { isUnauthorized, isAuthenticated } from '../../loaders/passport'
import AuthController from './AuthController'

const router = Router()


router.post('/signup/check', AuthController.checkLogin)
router.get('/signup', function(req, res, next) {
    res.render('signup')
})

router.post('/signup', AuthController.signup)

router.get('/login', isUnauthorized, function(req, res, next) {
    res.render('login', {message: req.query.message})
})

router.post('/login', isUnauthorized, AuthController.login)

router.get('/logout', isAuthenticated, AuthController.logout)

export default router