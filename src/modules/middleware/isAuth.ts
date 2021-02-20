import { MyContext } from './../../typing-stubs/MyContext';
import { MiddlewareFn } from "type-graphql"

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
   
    console.log({context})

    if(!context.req.session.userId){
        throw new Error('Not authorized!')
    }

    return next()
}
