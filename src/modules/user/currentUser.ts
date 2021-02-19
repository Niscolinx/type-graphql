import { MyContext } from '../../typing-stubs/MyContext'
import { Resolver, Query, Ctx } from 'type-graphql'
import { User } from '../../entity/User'

@Resolver(User)
export class CurrentUserResolver {
    @Query(() => User, { nullable: true })
    async currentUser(@Ctx() ctx: MyContext) {
        if (!ctx.req.session!.userId) {
            return undefined
        }

        return User.findOne(ctx.req.session!.userId)
    }
}
