import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'

@Resolver()
class RecipeResolver {
    private recipesCollection: Recipe[] = [];

    async recipes() {
        // fake async in this example
        return await this.recipesCollection;
    }
}

const main = async() => {
    const schema = await buildSchema({
        resolvers: [FirstResolver, SecondResolver],
    })


    const apolloServer = new ApolloServer({})
}

main()
