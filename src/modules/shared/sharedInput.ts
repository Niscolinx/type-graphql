import { InputType, Field } from 'type-graphql'
import { Min } from 'class-validator'


@InputType()
export class sharedInput {
    @Field()
    @Min(3)
    password: string
}
