"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
//instantiate an object of type index controller
const index_1 = require("../Controllers/index");
/* GET home page. */
router.get('/', index_1.DisplayHomePage);
/* GET home page. */
router.get('/home', index_1.DisplayHomePage);
/* GET about page. */
router.get('/about', index_1.DisplayAboutPage);
/* GET projects page. */
router.get('/projects', index_1.DisplayProjectsPage);
/* GET services page. */
router.get('/services', index_1.DisplayServicesPage);
/* GET contact page. */
router.get('/contact', index_1.DisplayContactPage);
/*GET conatcts-list */
router.get('/list', index_1.DisplayBusinessContactsListPage);
/* GET login page. */
router.get('/login', index_1.DisplayLoginPage);
/* POST process login page */
router.post('/login', index_1.ProcessLoginPage);
/* GET register page. */
router.get('/register', index_1.DisplayRegisterPage);
/* POST process register page */
router.post('/register', index_1.ProcessRegisterPage);
/* GET logout page */
router.get('/logout', index_1.ProcessLogOutPage);
//module.exports = router;
/* GET route for displaying add page - CREATE operation */
router.get('/add', index_1.DisplayAddPage);
/* POST route for processing add page - CREATE operation*/
router.post('/add', index_1.ProcessAddPage);
/* GET route for displaying edit page - UPDATE operation*/
router.get('/edit/:id', index_1.DisplayEditPage);
/* POST route for processing edit page - UPDATE operation*/
router.post('/edit/:id', index_1.ProcessEditPage);
/* GET route to perform deletion - DELETE operation*/
router.get('/delete/:id', index_1.ProcessDeletePage);
//# sourceMappingURL=index.js.map