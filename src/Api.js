import express from 'express'
import grapql from './middleware/graphql/route';


export default class Api {
    constructor() {
        // Create App
        this.app = express()

        // Attach Middleware
        this.middleware()
        // Attach App Routes
        this.routes()
    }
    middleware() {
        // Graphql Route
        this.app.use(grapql)
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.send(
                '<h1>Hello World!</h1>'
                + '<a href="/graphql">Over here 👀</a>'
            )
        })
    }
}