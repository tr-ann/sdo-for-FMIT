import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import UserRepository from './microservices/users/repositories/UserRepository'

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
            return done(err)
        }
    }
))

passport.serializeUser(function(user, cb) {
    cb(null, user.id)
})

passport.deserializeUser(async function(id, done) {
    let user = await UserRepository.readById(id)
    console.log('deserializing user:', user)
    done(err, user)
})

function isAutenticated(req, res, next) {
    req.isAuthenticated()
        ? next()
        : res.redirect('/login');
}

export { passport, isAutenticated }