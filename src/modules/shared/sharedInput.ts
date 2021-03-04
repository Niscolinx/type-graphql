import { InputType, Field } from 'type-graphql'


@InputType()
export class sharedInput {
    @Field()
    password: string
}
