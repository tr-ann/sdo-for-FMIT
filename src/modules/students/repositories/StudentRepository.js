const db = require('../../../dbModels')

class StudentRepository {

	async create(student) {
		return await db.Student.create(student)
	}

	async readById(id, pagination) {        
		return await db.Student.findByPk(id, {
			attributes: [ 'id', 'fullName', 'shortName', 'recordBook', 'userId' ],
			include: [
				{
					model: db.User,
					attributes: [ 'login' ],
					include: [{
						model: db.UserInfo,
						attributes: [ 'fullName', 'email', 'sex', 'description', 'birthday', 'city', 'address' ],
						as: 'userInfo'
						/*resourceId*/
					}],
					as: 'user'
				},
				{
					model: db.Group,
					attributes: [ 'number' ],
					as: 'group'
				},
				{
					model: db.Subgroup,
					attributes: [ 'name' ],
					include: [{
						model: db.Group,
						attributes: [ 'number' ],
						as: 'group'
					}],
					as: 'subgroups'
				}
			]
		})
	}

	async readAll(pagination) {
		return await db.Student.findAll({
			attributes: [ 'id', 'fullName', 'shortName', 'recordBook', 'userId' ],
			include: [
				{
					model: db.User,
					attributes: [ 'login' ],
					include: [{
						model: db.UserInfo,
						attributes: [ 'fullName', 'email', 'sex', 'description', 'birthday', 'city', 'address' ],
						as: 'userInfo'
						/*resourceId*/
					}],
					as: 'user'
				},
				{
					model: db.Group,
					attributes: [ 'number' ]
				},
				{
					model: db.Subgroup,
					attributes: [ 'name' ],
					include: [{
						model: db.Group,
						attributes: [ 'number' ],
						as: 'group'
					}],
					as: 'subgroups'
				}
			],
			limit: pagination.limit,
      offset: pagination.offset
		})
	}

	async update(id, student) {
		return await db.Student.update(student, {where: { id: id }})
	}

	async destroy(id) {
		return await db.Student.destroy({where: { id: id }})
	}

	async get(options) {
		return await db.Student.findAll(options)
	}
}

module.exports = new StudentRepository()