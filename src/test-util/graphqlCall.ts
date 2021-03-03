import { createSchema } from './../util/createSchema';
import { graphql } from 'graphql';

export const graphqlCall = async() => {
return graphql({
    schema: await createSchema()
})
    
}