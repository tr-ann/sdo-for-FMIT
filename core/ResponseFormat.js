const ResponseFormat = {
    build: (object, message, code, status)  => {
        return {
            data: object,
            code: code,
            message: message,
            status: status
        }
    },
    error: (object, message, code, status)  => {
        return {
            error: object,
            code: code,
            message: message,
            status: status
        }
    }
}

export default ResponseFormat