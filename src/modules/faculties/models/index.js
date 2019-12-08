import { sequelize } from '../../../config/sequelize'

import fs from 'fs'
import path from 'path'
const basename  = path.basename(__filename)
const db        = {}

fs
.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
    let model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
})

export default db