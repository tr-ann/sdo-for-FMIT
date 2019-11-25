import db from '../models'
import BaseRepository from '../../../core/BaseRepository'

export default class DisciplinesRepository extends BaseRepository  {

    constructor() {
        super(db.discipline, 'Discipline')
    }

    async readById(id) {
        return await this._baseModel.findByPk(id)
    }
}