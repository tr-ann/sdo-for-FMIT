import express from 'express'
import cookieParser from 'cookie-parser'

export default (app) => {
    app
        .use(cookieParser())
        .use(urlencoded({ extended: true }))
        .use(express.json())
}