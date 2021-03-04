import { session } from 'express-session';
import { createSchema } from './../util/createSchema';
import { graphql, GraphQLSchema } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';

interface Options {
    source: string
    variableValues?: Maybe<{
        [key: string]: any
    }>,
    userid?: number
}

let schema: GraphQLSchema

export const graphqlCall = async({source, variableValues}: Options, userId) => {
    if(!schema){
        schema = await createSchema()
    }
return graphql({
    schema,
    source,
    variableValues,
    contextValue: {
        req: {
            session: {
                userId
            }
        },
        res: {
            clearCookies: jest.fn()
        }
    }
})
    
}