"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secret = exports.HostName = exports.RemoteURI = exports.LocalURI = void 0;
exports.LocalURI = "mongodb://localhost/store";
exports.RemoteURI = process.env.RemoteURI;
exports.HostName = (exports.RemoteURI) ? "remotehost" : "localhost";
exports.Secret = "someSecret";
// export const RemoteURI = "mongodb+srv://jasmeet:rDoIWA9FlBsSvDNA@week5.y4ubu.mongodb.net/contacts?retryWrites=true&w=majority";
//# sourceMappingURL=db.js.map