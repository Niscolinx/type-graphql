import { InputType, Field, ClassType } from 'type-graphql'
import { Min } from 'class-validator'

export const PasswordMixin = <T extends ClassType>(BaseClass: T) => {
    @InputType()
    class PasswordInput extends BaseClass {
        @Field()
        ok: boolean
    }

    return PasswordInput
}

@InputType()
export class sharedInput {
    @Field()
    @Min(3)
    password: string
}
