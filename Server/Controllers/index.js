"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayRegisterPage = exports.DisplayLoginPage = exports.DisplayBusinessContactsListPage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
//get reference to the businessContact model class
const businessContact_1 = __importDefault(require("../Models/businessContact"));
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'about me', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'projects', page: 'projects' });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'services', page: 'services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'contact me', page: 'contact' });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayBusinessContactsListPage(req, res, next) {
    //similar to db.game.find()
    businessContact_1.default.find(function (err, businessContactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'businessContacts-list', page: 'Business Contacts List', businessContacts: businessContactsCollection });
    });
}
exports.DisplayBusinessContactsListPage = DisplayBusinessContactsListPage;
function DisplayLoginPage(req, res, next) {
    res.render('index', { title: 'login', page: 'Login' });
}
exports.DisplayLoginPage = DisplayLoginPage;
function DisplayRegisterPage(req, res, next) {
    res.render('index', { title: 'register', page: 'Register' });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
//# sourceMappingURL=index.js.map