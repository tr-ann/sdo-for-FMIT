import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import UserRepository from '../microservices/users/repositories/UserRepository'
import Unauthorized from '../core/errors/4xx/unauthorized'
import NotFound from '../core/errors/4xx/notFound'
import ResponseFormat from '../core/ResponseFormat'

passport.use(new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password',
    },
    async function(login, password, done) {
        try {
            const user = await UserRepository.get({ login })

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' })
            }

            if (await user.validPassword(password)) {
                return done(null, user)
            }

            return done(null, false, { message: 'Incorrect password.' })
        } catch (error) {
            return done(error)
        }
    }
))

passport.serializeUser(function(user, cb) {
    cb(null, user.id)
})

passport.deserializeUser(async function(id, done) {
    let user = await UserRepository.readById(id)
    done(null, user)
})


function login(req, res, next) {
    passport.authenticate('local',
        function(err, user, info) {
            if (err) next(err)
            
            if (!user) next(new NotFound())

            req.logIn(user, function(err) {
                if (err) next(err)

                return res.status(200).json(
                    ResponseFormat.build(
                        user,
                        'user authorized successfully',
                        200,
                        'success'
                    )
                )
            })
        }
    )(req, res, next)
}
  
function logout(req, res) {
    req.logout()
    console.log('success logout')
}


function isAutenticated(req, res, next) {
    req.isAuthenticated()
        ? next()
        : next(new Unauthorized())
}

export { passport, login, logout, isAutenticated }