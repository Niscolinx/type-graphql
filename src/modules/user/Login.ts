import {
    Resolver,
    Query,
    Mutation,
    Arg,
    FieldResolver,
    Root,
} from 'type-graphql'
import * as bcrypt from 'bcryptjs'
import { User } from '../../entity/User'
import { RegisterInput } from './userInputs'

@Resolver(User)
export class LoginResolver {
    @Mutation(() => User)
    async Login(
        @Arg('email') email: string,
        @Arg('password') password: string
    ): Promise<User> {

        conn

        const hashedPassword = await bcrypt.hash(password, 12)

       

        return user
    }
}
