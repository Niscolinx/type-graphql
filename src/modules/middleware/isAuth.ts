import { MiddlewareFn } from "type-graphql"

export const isAuth: MiddlewareFn = async ({ context }, next) => {
   
    console.log({context})
    return next()
}
