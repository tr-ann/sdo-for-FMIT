import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import UserRepository from '../modules/users/repositories/UserRepository'

passport.use(new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password',
    },
    async function(login, password, done) {
        try {
            const user = await UserRepository.get({ 
                where: {login: login},
                attributes: [ 'id', 'login', 'password' ]
            })

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


function isAuthenticated(req, res, next) {
    req.isAuthenticated()
        ? next()
        : res.redirect('/login?message=Need to authenticate')
}

function isUnauthorized(req, res, next) {
    req.isAuthenticated()
        ? res.redirect(`/users/${req.user.id}`)
        : next()
}

export { passport, isAuthenticated, isUnauthorized }