import UrlRepository from '../repositories/UrlRepository'

class UrlService {

    async list() {
        return await UrlRepository.readAll()
    }

    async create(url) {
        return await UrlRepository.create(url)
    }

    async findById(id) {
        let url = await UrlRepository.readById(id)
        if (!url) {
            throw new NotFound(`${objectName} not found`)
        }
        return url
    }

    async update(id, url) {
        let nUrl = UrlRepository.readById(id)
        if(!nUrl) {
            throw new NotFound(`${objectName} not found`)
        }
        return await UrlRepository.update(id, url)
    }

    async destroy(id) {
        await UrlRepository.destroy(id)
    }
}

export default new UrlService()