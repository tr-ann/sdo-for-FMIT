/**
 * Возвращается сервером, если для обработки запроса от клиента поступило недостаточно информации.
 */
export default class RetryWith extends Error {
    
    constructor(message = 'Did not enough information') {
        super(message)
        super.name = 'RetryWith'
        this.status = 449
    }
}