//import session from 'express-session'

declare module 'express-session' {
    export interface SessionData {
        userId: { [key: string]: any }
        req: Request
    }
}
