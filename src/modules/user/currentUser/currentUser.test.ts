import { User } from './../../../entity/User'
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

const currentuserQuery = `
{
 currentUser{
    id
    firstName
    lastName
    email
  }
}`
describe('Current User', () => {
    it('get user', async () => {
        const user = await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }).save()

        const response = await graphqlCall({
            source: currentuserQuery,
            userId: user.id
        })

      
        console.log(response)

    
    })
})
