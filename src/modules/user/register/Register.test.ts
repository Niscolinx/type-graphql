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

// const testRegisterMutation = `mutation {
//   register(
//     data: {
//       firstName: "John"
//       lastName: "doe"
//       password: "johndoe"
//       email: "johndoe6@gmail.com"
//     }
//   ) {
//     name
//     id
//     firstName
//     lastName
//     email
//   }
// }`

const registerMutation = `
mutation register ($data: RegisterInput!){
 {
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
            email: 'bob@gmail.com',
            password: 'bobhello'
          }
        }
      }))
    } )
})