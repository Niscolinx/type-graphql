import { InputType, Field } from 'type-graphql'

@InputType()
export class changePasswordInput{
    @Field()
    token: string
}
