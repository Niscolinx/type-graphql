import { PasswordMixin } from './../shared/sharedInput';
import { InputType, Field } from 'type-graphql'

@InputType()
export class changePasswordInput extends PasswordMixin(class {}){
    @Field()
    token: string
}
