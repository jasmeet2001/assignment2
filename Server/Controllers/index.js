"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.DisplayEditPage = exports.ProcessAddPage = exports.DisplayAddPage = exports.ProcessLogOutPage = exports.ProcessRegisterPage = exports.DisplayRegisterPage = exports.ProcessLoginPage = exports.DisplayLoginPage = exports.DisplayBusinessContactsListPage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const passport_1 = __importDefault(require("passport"));
//create an instance of user model
const user_1 = __importDefault(require("../Models/user"));
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
        res.render('index', { title: 'list', page: 'Business Contacts List', businessContacts: businessContactsCollection });
    });
}
exports.DisplayBusinessContactsListPage = DisplayBusinessContactsListPage;
/* functions for authentication */
function DisplayLoginPage(req, res, next) {
    res.render('index', { title: 'login', page: 'Login' });
}
exports.DisplayLoginPage = DisplayLoginPage;
function ProcessLoginPage(req, res, next) {
    let loginInfo = {
        username: req.body.username,
        password: req.body.password
    };
    passport_1.default.authenticate('local', (err, user, info) => {
        console.log(user);
        //are there any servers errors?
        if (err) {
            console.error(err);
            return next(err);
        }
        //are there any login errors?
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // are there any db errors?
            if (err) {
                console.error(err);
                return next(err);
            }
            console.log("Logged In successfully");
            return res.redirect('/list');
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function DisplayRegisterPage(req, res, next) {
    res.render('index', { title: 'register', page: 'Register' });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegisterPage(req, res, next) {
    // instructions for new User object
    let newUser = new user_1.default({
        username: req.body.username,
        emailaddress: req.body.emailaddress,
        displayName: req.body.firstName + "" + req.body.lastName
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error('Error: Inserting New User');
            if (err.name == "UserExistsError") {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');
            return res.redirect('/register');
        }
        // after successful registration - lets login the user
        return passport_1.default.authenticate('local')(req, res, () => {
            return res.redirect('/list');
        });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogOutPage(req, res, next) {
    req.logOut();
    res.redirect('/login');
}
exports.ProcessLogOutPage = ProcessLogOutPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'add', page: 'Add Business Contact' });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessAddPage(req, res, next) {
    let newContact = new businessContact_1.default({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress,
    });
    businessContact_1.default.create(newContact, (err, businessContactsCollection) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the business contact list
            res.redirect('/list');
        }
    });
}
exports.ProcessAddPage = ProcessAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    businessContact_1.default.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('index', { title: 'edit', page: 'Edit Business Contact', businessContact: contactToEdit });
        }
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContact = new businessContact_1.default({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress,
    });
    businessContact_1.default.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the business contact list
            res.redirect('/list');
            //res.render('index', { title: 'list', page: 'Business Contact List'});
        }
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    businessContact_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the business contact list
            res.redirect('/list');
        }
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=index.js.map