import { sharedInput } from '../../shared/sharedInput';
import { IsEmailAlreadyExist } from './doesEmailExist';
import { Length, IsEmail, Min } from 'class-validator'
import { InputType, Field } from 'type-graphql'

@InputType()
export class RegisterInput{
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
    @Min(3)
    password: string
 
}
