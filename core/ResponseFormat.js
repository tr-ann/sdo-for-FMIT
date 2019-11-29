const ResponseFormat = {
    build: (object, message, statusCode, statusType)  => {
        return {
            data: object,
            statusCode: statusCode,
            message: message,
            statusType: statusType
        }
    }
}

export default ResponseFormat