import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import db from '../../models'
import UserRepository from '../microservices/users/repositories/user'
import { hash } from 'bcrypt'

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    },
    async function(username, password, done) {
        try {
            user = await db.user.findByUsername(username)
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            let hashPassw = hash(password)
            if (db.validPassword(user, hashPassw)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        } catch (error) {
            return done(err)
        }
    }
))

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, done) {
    let user = await UserRepository.readById(id)
    console.log('deserializing user:', user);
    done(err, user);
});

function isAutenticated(req, res, next) {
    return req.isAutenticated()
    ? res.redirect('/')
    : next()
    
}

export {isAutenticated, passport}