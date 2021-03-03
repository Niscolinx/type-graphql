import { graphqlCall } from './../../../test-util/graphqlCall';
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
    data: $data
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
       
      console.log(await graphqlCall({
        source: registerMutation,
        variableValues: {
          data: {
            firstName: 'bob',
            lastName: 'hello',
            email: 'bob@gmail.com'
          }
        }
      }))
    } )
})