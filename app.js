import express from 'express';
import initApp from './loaders'
import { connect as databaseConnect } from './config/sequelize'
//import initModels from './config/dbModels'

databaseConnect()
//initModels()

export default app = express()
initApp(app)