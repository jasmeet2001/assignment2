import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose Schema
import passportLocalMongoose from 'passport-local-mongoose';

const User = new Schema
({
    contactName: {
        type: String,
        default : '',
        required: 'Username is required'
    },

    contactNumber: 
    {

    },
    emailAddress: 
    {
        type: String,
        default : '',
        required: 'Email Address is required'
    },
    displayName:
    {
        type: String,
        default : '',
        required: 'Display Name is required'
    },
    created:
    {
        type: Date,
        default: Date.now
    },
    update:
    {
        type: Date,
        default: Date.now
    }

},
{
    collection: "users"
});

const Model = mongoose.model("BusinessContact", User);
export default Model;