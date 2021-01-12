//import session from 'express-session'
import { Request } from 'express'
import 'express-session'

declare module 'express-session' {
     interface SessionData {
        userId: number
        req: Request
    }
}
