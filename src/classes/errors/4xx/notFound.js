/**
 * Возвращается сервером, если не было нашйдено соответствующего ресурса по указанному URL.
 */
export default class NotFound extends Error {
    
    constructor(message = 'The resource is not found') {
        super(message)
        super.name = 'NotFound'
        this.status = 404
    }
}