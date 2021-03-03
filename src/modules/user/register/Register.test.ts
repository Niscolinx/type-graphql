import { testConn } from './../../../test-util/testConn';
import { Connection } from 'typeorm';

let conn:Connection

beforeAll(async() => {

   conn =  await testConn()
})

afterAll(async () => {
    conn = await (await testConn()).close()
})