import { Connection } from 'typeorm'
import faker from 'faker'

import { graphqlCall } from './../../../test-util/graphqlCall'
import { testConn } from './../../../test-util/testConn'

let conn: Connection

beforeAll(async () => {
    conn = await testConn()
})

afterAll(async () => {
    await conn.close()
})


const registerMutation = `
mutation Register ($data: RegisterInput!){
 register(data: $data){
    id
    firstName
    lastName
    email
  }
}`
describe('Register', () => {
    it('creates user', async () => {
        console.log(
            await graphqlCall({
                source: registerMutation,
                variableValues: {
                    data: user
                },
            })
        )
    })
})
