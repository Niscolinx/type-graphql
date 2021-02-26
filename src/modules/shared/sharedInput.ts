import { Min } from 'class-validator'
import { InputType, Field, ClassType } from 'type-graphql'

export const PasswordMixin = <T extends ClassType>(BaseClass: T) => {
    @InputType()
    class PasswordInput extends BaseClass {
        @Field()
        @Min(3)
        password: string

        @Field()
        ok: boolean
    }

    return PasswordInput
}
