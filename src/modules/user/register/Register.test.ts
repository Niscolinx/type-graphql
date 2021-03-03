import { testConn } from './../../../test-util/testConn';
import { Connection } from 'typeorm';

let conn:Connection

beforeAll(async() => {

   conn =  await testConn()
})

afterAll(async () => {
   await conn.close()
})

describe('Register',  () => {
    it('creates user', () => {
        
    } )
})