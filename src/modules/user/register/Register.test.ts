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
        const user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }
        const response = await graphqlCall({
            source: registerMutation,
            variableValues: {
                data: user,
            },
        })

        expect(response).toMatchObject({
            data: {
                register: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                },
            },
        })

        const dbUser: any = await User.findOne({
            where: {
                email: user.email,
            },
        })
       
        
        expect(dbUser).toBeDefined()
        expect(dbUser!.confirmedEmail).toBeFalsy()
        expect(dbUser!.firstName).toBe(user.firstName)
    })
})
