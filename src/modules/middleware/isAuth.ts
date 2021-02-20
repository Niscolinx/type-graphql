import { MyContext } from './../../typing-stubs/MyContext';
import { MiddlewareFn } from "type-graphql"


declare module 'express-session' {
    interface Session {
        userId: number
    }
}
export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
    if(!context.req.session.userId){
        throw new Error('Not authorized!')
    }

    return next()
}
