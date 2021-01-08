import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import * as bcrypt from 'bcryptjs'
import { User } from '../../entity/User'

@Resolver()
export class RegisterResolver {
    //Sometimes graphql needs a query to be stable, that's the reason for leaving this here
    @Query(() => String)
    async hello() {
        // fake async in this example
        return 'Hello World!'
    }

    @Mutation(() => String)
    async register(
        @Arg('firstName') firstName: string,
        @Arg('lastName') lastName: string,
        @Arg('email') email: string,
        @Arg('password') password: string
    )
     {
         const hashedPassword = await bcrypt.hash(password, 12)

         const user = await User.create({
             firstName, lastName, email, password: hashedPassword
         }).save()

         console.log('the user', user)
     }
}
