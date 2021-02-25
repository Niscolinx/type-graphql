import { Length } from 'class-validator'
import { InputType, Field } from 'type-graphql'

@InputType()
export class sharedInput {
 
    @Field()
    @Length(1, 255)
    password: string
}
