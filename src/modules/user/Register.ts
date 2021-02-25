import { confirmEmailUrl } from '../util/confirmEmailUrl';
import { sendEmail } from './../util/sendEmail';
import { Resolver, Query, Mutation, Arg, FieldResolver, Root, UseMiddleware } from 'type-graphql'
import * as bcrypt from 'bcryptjs'
import { User } from '../../entity/User'
import { RegisterInput } from './registInputs'
import { isAuth } from '../middleware/isAuth'

@Resolver(User)
export class RegisterResolver {
    //Sometimes graphql needs a query to be stable, that's the reason for leaving this here
    @UseMiddleware(isAuth)
    @Query(() => String)
    async hello() {
        // fake async in this example
        return 'Hello World!'
    }


    @FieldResolver()
    async name(@Root() parent:User){
        return `${parent.firstName} ${parent.lastName}`
    }

    @Mutation(() => User)
    async register(
        @Arg('data') {firstName, lastName, email, password}: RegisterInput
    ): Promise<User>
     {
         const hashedPassword = await bcrypt.hash(password, 12)

         const user = await User.create({
             firstName, lastName, email, password: hashedPassword
         }).save()

         console.log('registered user', user)
         await sendEmail(email, await confirmEmailUrl(user.id))

         return user
     }
}
