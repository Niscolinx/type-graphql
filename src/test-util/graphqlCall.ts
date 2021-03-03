import { createSchema } from './../util/createSchema';
import { graphql } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';

interface Options {
    source: string
    variableValues?: Maybe<{
        [key: string]: any
    }>
}

export const graphqlCall = async({source, variableValues}: Options) => {
return graphql({
    schema: await createSchema(),
    source,
    variableValues
})
    
}