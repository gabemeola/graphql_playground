import express from 'express'
import schema from './schema'
import graphqlExpress from 'express-graphql'
import bodyParser from 'body-parser'


const app = express()

app.post('/graphql', bodyParser.json());
app.use('/graphql', graphqlExpress({
    schema: schema,
    graphiql: true
}))


export default app