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
    
        const user = User.update(userId, {
            confirmedEmail: true
        })

        await user.save()

        return true
        
    }
}
