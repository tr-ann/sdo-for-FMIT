import db from '../models'
import BaseRepository from '../../../core/BaseRepository'

export default class BuildingsRepository extends BaseRepository {

    constructor() {
        super(db.building, 'Building')
    }

    async readById(id) {        
        return await this._baseModel.findByPk(id)
    }
}