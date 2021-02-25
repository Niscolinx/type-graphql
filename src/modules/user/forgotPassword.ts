import { forgotPasswordToken } from './../constants/redisPrefixes'
import { forgotPasswordInput } from './forgotPasswordInputs'
import { redis } from './../../redis'
import { Resolver, Mutation, Arg } from 'type-graphql'
import { User } from '../../entity/User'
import bcrypt from 'bcryptjs'
import { v4 } from 'uuid'

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

        const userId = await redis.set(forgotPasswordToken + token)

        if (!userId) {
            return false
        }

        await User.update(userId, {
            confirmedEmail: true,
        })

        await redis.del(token)

        return true
    }
}
