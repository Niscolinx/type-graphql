import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import Express from 'express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { RegisterResolver } from './modules/user/Register'
import session from 'express-session'

const main = async () => {
    await createConnection()

    const schema = await buildSchema({
        resolvers: [RegisterResolver],
    })

    const apolloServer = new ApolloServer({ schema })

    const app = Express()

    app.use(
        session({
            store: new RedisStore({
                client: redis as any,
            }),
            name: 'qid',
            secret: 'sfsnfnsfs',
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 1000 * 60 * 60 * 24 * 7 * 365 //7 Years
            }
        })
    )

    apolloServer.applyMiddleware({ app })

    app.listen(4000, () => {
        console.log('Server is running on port http://localhost:4000/graphql')
    })
}

main()
