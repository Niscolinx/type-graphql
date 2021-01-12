import { MyContext } from '../../types/MyContext'
import { Resolver, Query, Ctx } from 'type-graphql'
import { User } from '../../entity/User'

@Resolver(User)
export class MeResolver {
    //Sometimes graphql needs a query to be stable, that's the reason for leaving this here
    @Query(() => User, { nullable: true })
    async currentUser(@Ctx() ctx: MyContext) {
        // if (!ctx.req.session!.userId) {
        //     return undefined
        // }

        // return User.findOne(ctx.req.session!.userId)
    }
}
