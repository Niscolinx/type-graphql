import { Resolver, Query, Mutation } from 'type-graphql'

@Resolver()
export class RegisterResolver {

    //Sometimes graphql needs a query to be stable, that's the reason for leaving this here
    @Query(() => String)
    async hello() {
        // fake async in this example
        return 'Hello World!'
    }

    @Mutation(() => String)
    async register(){
        @Arg("firstName") firstName: string,

    }
}
