//import session from 'express-session'
import { Request } from 'express'
import 'express-session'

declare module 'express-session' {
     interface Session {
        userId: number
        req: Request
    }
}
