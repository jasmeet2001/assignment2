import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema; //alias for mongoose Schema

const UserSchema = new Schema
({
    username:
    {
        type: String,
        default:"",
        required: 'username is required'
    },
    email:
    {
        type: String,
        default:"",
        required: 'Email Address is required'
    },
    displayName:
    {
        type: String,
        default:"",
        required: 'Display Name is required'
    },
    created:
    {
        type: Date,
        default: Date.now,
    },
    update:
    {
        type: Date,
        default: Date.now,
    }


},
{
    collection: "user"
});
//configure options for User Model

let options ({ missingPasswordError : 'wrong/ Missing Password'});
UserSchema.plugin(passportLocalMongoose, options);

const Model = mongoose.model("Users", UserSchema);
export default Model;