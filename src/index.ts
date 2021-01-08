import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema, Resolver, Query } from 'type-graphql'

@Resolver()
class HelloResolver {
    @Query(() => String)

    async hello() {
        // fake async in this example
        return 'Hello World!'
    }
}

const main = async() => {
    const schema = await buildSchema({
        resolvers: [HelloResolver]
    })

    const apolloServer = new ApolloServer({schema})

    const app = Express.default()
    
    apolloServer.applyMiddleware({app})

    app.listen(4000, () => {
        console.log('Server is running on port http://localhost:4000/graphql')
    })
}

main()
