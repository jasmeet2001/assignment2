import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose Schema
import passportLocalMongoose from 'passport-local-mongoose';
import { StructuredType } from 'typescript';

const UserSchema = new Schema
({
    username: String,
    emailaddress: String,
    displayName: String,
    created:
    {
        type: Date,
        default: Date.now()
    },
    updated:
    {
        type: Date,
        default: Date.now()
    }

},
{
    collection: "users"
});

UserSchema.plugin(passportLocalMongoose);

declare global
{
    export type UserDocument = mongoose.Document &
    {
        _id: String,
        username: String,
        emailaddress:  String,
        displayName: String
    }
}

const Model = mongoose.model("User", UserSchema as PassportLocalSchema);
export default Model;