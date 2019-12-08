import { passport } from './passport'
import session from 'express-session'

export default (app) => {
    app
        .use(session({ 
            secret: 'SECRET',
            resave: true,
            saveUninitialized: false, 
        }))
        .use(passport.initialize())
        .use(passport.session())
}