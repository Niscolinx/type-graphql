import { testConn } from './../../../test-util/testConn';
import { Connection } from 'typeorm';

let conn:Connection

beforeAll(async() => {

   conn =  await testConn()
})

afterAll(async () => {
   await conn.close()
})

const registerMutation = `
mutation Register ($data: RegisterInput!){
  register(
    data: {
      firstName: "John"
      lastName: "doe"
      password: "johndoe"
      email: "johndoe6@gmail.com"
    }
  ) {
    name
    id
    firstName
    lastName
    email
  }
}`
describe('Register',  () => {
    it('creates user', async() => {
       
    } )
})