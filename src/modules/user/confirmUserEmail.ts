import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { User } from '../../entity/User'

declare module 'express-session' {
    interface Session {
        userId: number
    }
}

@Resolver()
export class ConfirmEmailResolver {
    @Mutation(() => User, { nullable: true })
    async Login(
        @Arg('userId') userId: string,
    ): Promise<User | null> {
        
        const user = User.update(userId, {
            confirmedEmail: true
        })

      return await user.save()
        
    }
}
