import { Resolver, Mutation, Arg } from "type-graphql";
import { GraphQLUpload } from "graphql-upload";
import { Upload } from "src/typing-stubs/Upload";

@Resolver()
export class ProfilePictureResolver{
    @Mutation(() => Boolean)
    async addProfilePicture(@Arg("picture", () => GraphQLUpload) {
        createStream,
        file
    }:Upload): Promise<Boolean>
}