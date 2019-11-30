import bcrypt from 'bcrypt'

export default class Hash {
    async get(data) {
        return await bcrypt.hash(data)
    }

    async compare(data, hash) {
        return await bcrypt.compare(data, hash)
    }
}