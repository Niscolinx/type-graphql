import { sharedInput } from './../shared/sharedInput';
import { InputType, Field } from 'type-graphql'

@InputType()
export class forgotPasswordInput extends sharedInput{
    @Field()
    token: string
}
