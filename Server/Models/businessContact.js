"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema; //alias for mongoose Schema
const BusinessContactsSchema = new Schema({
    contactName: String,
    contactNumber: Number,
    emailAddress: String,
}, {
    collection: "businessContacts"
});
const Model = mongoose_1.default.model("BusinessContact", BusinessContactsSchema);
exports.default = Model;
//# sourceMappingURL=businessContact.js.map