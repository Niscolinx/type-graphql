import { redis } from '../../redis';
import {v4} from 'uuid'


export const confirmEmailUrl = async(userId: number) => {
    const token = v4()

    await redis.set(token, userId, 'ex', 60 * 60 * 24)

    return `http://localhost:3000/confirmEmail/${token}`
}