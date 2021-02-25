import { sharedInput } from '../shared/sharedInput';
import { InputType, Field } from 'type-graphql'

@InputType()
export class changePasswordInput extends sharedInput{
    @Field()
    token: string
}
