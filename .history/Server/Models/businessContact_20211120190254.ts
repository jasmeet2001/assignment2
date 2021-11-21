import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose Schema

const BusinessContactsSchema = new Schema
({
    contactName: String,
    contactNumber: Number,
    emailAddress: String,

},
{
    collection: "businessContacts"
});

const Model = mongoose.model("BusinessContact", BusinessContactsSchema);
export default Model;