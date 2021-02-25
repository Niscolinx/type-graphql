import { MyContext } from '../../typing-stubs/MyContext'
import { Resolver, Mutation, Ctx } from 'type-graphql'

declare module 'express-session' {
    interface Session {
        userId: number
    }
}

@Resolver()
export class LogoutResolver {
    @Mutation(() => Boolean)
    async currentUser(@Ctx() ctx: MyContext): Promise<User | undefined> {
        if (!ctx.req.session!.userId) {
            return undefined
        }

        return User.findOne(ctx.req.session!.userId)
    }
}
