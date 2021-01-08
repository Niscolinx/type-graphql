import { MaxLength, Length } from 'class-validator'

@InputType()
export class RecipeInput {
    @Field()
    @MaxLength(30)
    title: string

    @Field({ nullable: true })
    @Length(30, 255)
    description?: string
}
