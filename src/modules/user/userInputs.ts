import { IsEmailAlreadyExist } from './doesEmailExit';
import { Length, IsEmail } from 'class-validator'
import { InputType, Field } from 'type-graphql'

@InputType()
export class RegisterInput {
    @Field()
    @Length(1, 255)
    firstName: string
    
    @Field()
    @Length(1, 255)
    lastName: string

    @Field()
    @IsEmail()
    @IsEmailAlreadyExist({message: 'Email already exits'})
    email: string

    @Field()
    @Length(1, 255)
    password: string

 
}
