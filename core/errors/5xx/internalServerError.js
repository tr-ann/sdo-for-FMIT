/**
 * Любая внутренняя ошибка сервера, которая не входит в рамки остальных ошибок класса.
 */
export default class InternalServerError extends Error {
    
    constructor(message = 'Internal server error') {
        super(message)
        super.name = 'InternalServerError'
        this.status = 500
    }
}