import { redis } from './../../redis';
import {v4} from 'uuid'


export const confirmEmail = async(userId: number) => {
    const id = v4()

    await redis.set(id, userId)

    return `http://localhost:3000/confirmEmail/${userId}`
}