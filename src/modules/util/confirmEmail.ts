import { redis } from './../../redis';
import {v4} from 'uuid'


export const confirmEmail = async(userId: number) => {
    const token = v4()

    await redis.set(token, userId)

    return `http://localhost:3000/confirmEmail/${userId}`
}