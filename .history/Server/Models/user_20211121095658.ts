import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose Schema
import passportLocalMongoose from 'passport-local-mongoose';

const User = new Schema
({
    contactName: String,
    contactNumber: Number,
    emailAddress: String,

},
{
    collection: "users"
});

const Model = mongoose.model("BusinessContact", User);
export default Model;