import { MyContext } from './../types/MyContext';
import { Resolver, Mutation, Arg } from 'type-graphql'
import * as bcrypt from 'bcryptjs'
import { User } from '../../entity/User'

@Resolver(User)
export class LoginResolver {
    @Mutation(() => User, {nullable: true})
    async Login(
        @Arg('email') email: string,
        @Arg('password') password: string
        @MyContext()
    ): Promise<User | null> {
        const user = await User.findOne({ where: { email } })

        if (!user) {
            return null
        }

        const valid = await bcrypt.compare(password, user.password)
        console.log("valid", valid)

        if (!valid) {
            return null
        }

        return user
    }
}
