export const LocalURI = "mongodb://localhost/store";
export const RemoteURI = process.env.RemoteURI;
export const HostName = (RemoteURI) ? "remotehost" : "localhost";
export const Secret = "someSecret";
// export const RemoteURI = "mongodb+srv://jasmeet:rDoIWA9FlBsSvDNA@week5.y4ubu.mongodb.net/contacts?retryWrites=true&w=majority";