import express from 'express'
import initApp from './loaders'
import { connect as databaseConnect } from './classes/sequelize'
//import initModels from './classes/dbModels'

databaseConnect()
//initModels()

const app = express()

initApp(app)

export default app