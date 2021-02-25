import { MyContext } from './../../typing-stubs/MyContext';
import { forgotPassword } from './../constants/redisPrefixes'
import { changePasswordInput } from './changePasswordInputs'
import { redis } from './../../redis'
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { User } from '../../entity/User'
import bcrypt from 'bcryptjs'

declare module 'express-session' {
    interface Session {
        userId: number
    }
}

@Resolver()
export class ChangePasswordResolver {
    @Mutation(() => Boolean, { nullable: true })
    async changePassword(
        @Arg('data') { token, password }: changePasswordInput,
        @Ctx() ctx: MyContext
    ): Promise<Boolean> {
        const userId = await redis.get(forgotPassword + token)

        console.log({userId})

        if (!userId) {
            return false
        }

        const user = await User.findOne(userId)

        if (!user) {
            return false
        }

        user.password = await bcrypt.hash(password, 12)

        await user.save()

        ctx.req.session.userId = user.id

        return true
    }
}
