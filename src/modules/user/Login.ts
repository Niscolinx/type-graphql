import { MyContext } from '../../typing-stubs/MyContext';
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import * as bcrypt from 'bcryptjs'
import { User } from '../../entity/User'


declare module 'express-session' {
    interface Session {
        userId: number
    }
}

@Resolver(User)
export class LoginResolver {
    
    @Mutation(() => User, {nullable: true})
    async Login(
        @Arg('email') email: string,
        @Arg('password') password: string,
        @Ctx() ctx:MyContext
    ): Promise<User | null | string> {
        const user = await User.findOne({ where: { email } })

        if (!user) {
            return null
        }

        const valid = await bcrypt.compare(password, user.password)

        if (!valid) {
            return null
        }

        if(!user.confirmedEmail){
            return 'Please confirm your email'
        }

      
        console.log('the context =================', ctx.req.session)
        console.log('the user id', user.id)

        ctx.req.session!.userId = user.id
       // const theSession = ctx.req.session

        //theSession.userId = user.id
        return user
    }
}
