import { Resolver, Mutation, Args } from "type-graphql";
import { createWriteStream } from "fs";
import { GraphQLUpload } from "apollo-server-express";

@Resolver()
export class ProfilePictureResolver{
    @Mutation(() => Boolean)
    async addProfilePicture(@Args({name:"picture", type: async() => GraphQLUpload}) {
        createReadStream,
        filename
    }): Promise<boolean> {
        return new Promise(async(resolve, reject) => {
            console.log('picture upload')
            createReadStream()
            .pipe(createWriteStream(__dirname + `../../images/${filename}`))
            .on('finish', () => resolve(true))
            .on('error', () => reject(false))
        })
    }
}


