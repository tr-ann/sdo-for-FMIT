import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

export default (app) => {
    app
        .use(cookieParser())
        .use(bodyParser.json())
        .use(express.urlencoded({ extended: true }))
}