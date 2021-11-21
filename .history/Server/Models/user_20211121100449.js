"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema; //alias for mongoose Schema
const User = new Schema({
    contactName: {
        type: String,
        default : '',
        trim: true,
        required: 'Username is required'
    },

    contactNumber: 
    {

    },
    emailAddress: 
    {
        type: String,
        default : '',
        trim: true,
        required: 'Email Address is required'
    },
    displayName:
    {
        type: String,
        default : '',
        trim: true,
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
}, {
    collection: "users"
});
const Model = mongoose_1.default.model("BusinessContact", User);
exports.default = Model;
//# sourceMappingURL=user.js.map