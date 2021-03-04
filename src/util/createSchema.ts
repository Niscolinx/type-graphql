// import { LogoutResolver } from './../modules/user/logout';
// import { ForgotPasswordResolver } from './../modules/user/forgotPassword';
// import { CurrentUserResolver } from './../modules/user/currentUser';
// import { ConfirmEmailResolver } from './../modules/user/confirmUserEmail';
// import { ChangePasswordResolver } from './../modules/user/changePassword';
// import { LoginResolver } from './../modules/user/Login';
// import { RegisterResolver } from './../modules/user/Register';
import { buildSchema } from "type-graphql"

export const createSchema = () => 
 buildSchema({
        resolvers: [__dirname + '/../modules/*/*.ts'],

        // resolvers: [
        //     RegisterResolver,
        //     LoginResolver,
        //     ChangePasswordResolver,
        //     ConfirmEmailResolver,
        //     CurrentUserResolver,
        //     ForgotPasswordResolver,
        //     LogoutResolver
        // 
    })

