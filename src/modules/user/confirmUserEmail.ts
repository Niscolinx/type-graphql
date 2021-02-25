import { redis } from './../../redis';
import { Resolver, Mutation, Arg } from 'type-graphql'
import { User } from '../../entity/User'

declare module 'express-session' {
    interface Session {
        userId: number
    }
}

@Resolver()
export class ConfirmEmailResolver {
    @Mutation(() => Boolean)
    async confirm(
        @Arg('token') token: string,
    ): Promise<boolean>{
        
        const userId = await redis.get(token)

        if(!userId){
            return false
        }
    
        await User.update(userId, {
            confirmedEmail: true
        })

        await redis.del(token)


        return true
        
    }
}
