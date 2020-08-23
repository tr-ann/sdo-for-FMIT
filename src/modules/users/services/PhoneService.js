const PhoneRepository = require('../repositories/PhoneRepository');
const UserService = require('../services/UserService');
const { NotFound, BadRequest } = require('../../../classes/errors');
const db = require('../../../dbModels');

class PhoneService {

	async create(phone, options) {
		return await PhoneRepository.create(phone, options);
	}

	async createPhonesForUser(userId, phones, options) {

		return await phones.map( (phone) => {

			PhoneRepository.create({ userId: userId, phone: phone }, options)
				.then((phone) => {
					return phone;
				});

		});
	}

	async addToUser(user, phones, options) {
		await this.destroyUserPhones(user.id, { transaction: options.transaction})

		let newPhones = [];

		if (phones) {
			for (let phoneObj of phones) {
				let newPhone = await db.Phone.findOrCreate({
					where: { phone: phoneObj.phone }, 
					default: { phone: phoneObj.phone },
					transaction: options.transaction
				});

				newPhones.push(newPhone[0].id);
			}
		}

		await user.setPhones(newPhones, options);

		return;
	}

	async destroyUserPhones(userId, options) {
		let phones = await PhoneRepository.get({ where: { userId: userId }});

		for (let phone of phones) {
			await phone.destroy(options);
		}

		return;
	}

	async findById(id) {

		let phone = await PhoneRepository.readById(id);

		if (!phone) {
			throw new NotFound(`Phone not found`);
		}

		return phone;
	}

	async update(id, phone) {

		let oldPhone = PhoneRepository.readById(id);

		if(!oldPhone) {
			throw new NotFound(`Phone not found`);
		}

		return await PhoneRepository.update(id, phone);
	}

	async destroy(id) {

		let oldPhone = PhoneRepository.readById(id);

		if(!oldPhone) {
			throw new NotFound(`Phone not found`);
		}

		await PhoneRepository.destroy(id);
	}
}

module.exports = new PhoneService();