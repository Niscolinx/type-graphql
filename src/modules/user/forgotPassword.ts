import { forgotPassword } from './../constants/redisPrefixes'
import { redis } from './../../redis'
import { Resolver, Mutation, Arg } from 'type-graphql'
import { User } from '../../entity/User'
import { v4 } from 'uuid'
import { sendEmail } from '../util/sendEmail'

declare module 'express-session' {
    interface Session {
        userId: number
    }
}

@Resolver()
export class ForgotPasswordResolver {
    @Mutation(() => User, { nullable: true })
    async forgotPassword(@Arg('email') email: string): Promise<User | null> {
        const user = await User.findOne({ where: { email } })

        if (!user) {
            return null
        }

        const token = v4()

        
        await redis.set(forgotPassword + token, user.id, 'ex', 60 * 60)
        

        await sendEmail(
            email,
            `http://localhost:3000/forgot-password/${
                forgotPassword + token
            }`
        )

        return user
    }
}
