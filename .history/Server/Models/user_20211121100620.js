"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema; //alias for mongoose Schema
const User = new Schema({
    
}, {
    collection: "users"
});
const Model = mongoose_1.default.model("BusinessContact", User);
exports.default = Model;
//# sourceMappingURL=user.js.map