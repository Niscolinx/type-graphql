import { Length } from 'class-validator'
import { InputType, Field, ClassType } from 'type-graphql'

export const PasswordMixin = <T extends ClassType>(BaseClass: T) => {
    @InputType()
    class SharedInput extends BaseClass {
        @Field()
        @Length(1, 255)
        password: string
    }

    return SharedInput
}
