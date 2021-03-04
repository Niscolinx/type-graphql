import { createSchema } from './../util/createSchema';
import { graphql } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';

interface Options {
    source: string
    variableValues?: Maybe<{
        [key: string]: any
    }>
}

let schema:any

export const graphqlCall = async({source, variableValues}: Options) => {
    if(!schema){
        schema = createSchema()
    }
return graphql({
    schema,
    source,
    variableValues
})
    
}