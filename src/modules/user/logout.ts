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
    async logout(@Ctx() ctx: MyContext): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            
            ctx.req.session.destroy((err) => {

                if(err){
                   return reject(false)
                }

                ctx.res.clearCookie('qid')
                return resolve(true)
            })


        })
     
    }
}
