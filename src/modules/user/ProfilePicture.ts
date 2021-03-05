import { Resolver, Mutation, Arg } from "type-graphql";
import { GraphQLUpload } from "graphql-upload";

@Resolver()
export class ProfilePictureResolver{
    @Mutation(() => Boolean)
    async addProfilePicture(@Arg("picture", () => GraphQLUpload) {

    }:Upload): Promise<Boolean>
}