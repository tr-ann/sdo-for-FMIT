const db = require('../../../dbModels')

class StudentRepository {

	async create(student, options) {
		return await db.Student.create(student, options)
	}

	async readById(id) {   
		return await db.Student.findByPk(id, {
			attributes: [ 'id', 'fullName', 'recordBook' ],
			include: [
				{
					model: db.User,
					attributes: [ 'id', 'login' ],
					include: [
						{
							model: db.UserInfo,
							attributes: [ 'email' ],
							as: 'userInfo'
						},
						{
							model: db.StudentInfo,
							//attributes: [],
							as: 'studentInfo'
						}
					],
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
			attributes: [ 'id', 'fullName', 'recordBook', 'userId' ],
			include: [
				{
					model: db.Group,
					attributes: [ 'id', 'number' ]
				},
			],
			limit: pagination.limit,
      offset: pagination.offset
		})
	}

	async update(id, student, options) {
		Object.assign(options, { where: { id: id }});

		return await db.Student.update(student, options);
	}

	async destroy(id) {
		return await db.Student.destroy({where: { id: id }})
	}

	async get(options) {
		return await db.Student.findAll(options)
	}
}

module.exports = new StudentRepository()