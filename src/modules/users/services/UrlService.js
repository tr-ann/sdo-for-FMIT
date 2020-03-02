const UrlRepository = require('../repositories/UrlRepository');
const { NotFound } = require('../../../classes/errors');

class UrlService {

	async create(url) {
		return await UrlRepository.create(url);
	}

	async readAll() {
		return await UrlRepository.readAll();
	}

	async readById(id) {

		let url = await UrlRepository.readById(id);

		if (!url) {
			throw new NotFound('Url not found');
		}

		return url;
	}

	async update(id, url) {

		let oldUrl = await UrlRepository.readById(id);
		
		if (!oldUrl) {
			throw new NotFound('Url not found');
		}

		return await UrlRepository.update(id, url);
	}

	async destroy(id) {

		let url = await UrlRepository.readById(id);
		
		if (!url) {
			throw new NotFound('Url not found');
		}
		
		return await UrlRepository.destroy(id);
	}
}

module.exports = new UrlService();