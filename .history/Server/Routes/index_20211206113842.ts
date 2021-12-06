import express from 'express';
const router = express.Router();
export default router;

//instantiate an object of type index controller
import {ProcessLogOutPage,DisplayRegisterPage,DisplayHomePage, DisplayLoginPage ,DisplayAboutPage, DisplayContactPage, DisplayProjectsPage, DisplayServicesPage, DisplayBusinessContactsListPage, ProcessLoginPage, ProcessRegisterPage, DisplayAddPage, ProcessAddPage, DisplayEditPage, ProcessEditPage, ProcessDeletePage} from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);
/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);
/* GET projects page. */
router.get('/projects', DisplayProjectsPage);
/* GET services page. */
router.get('/services', DisplayServicesPage);
/* GET contact page. */
router.get('/contact',DisplayContactPage);

/*GET games-list */
router.get('/businessContacts-list', DisplayBusinessContactsListPage);

/* GET login page. */
router.get('/login',DisplayLoginPage);

/* POST process login page */
router.post('/login', ProcessLoginPage);

/* GET register page. */
router.get('/register',DisplayRegisterPage);

/* POST process register page */
router.post('/register',ProcessRegisterPage);

/* GET logout page */
router.get('/logout', ProcessLogOutPage);
//module.exports = router;

/* GET route for displaying add page - CREATE operation */
router.get('/add', DisplayAddPage);

/* POST route for processing add page - CREATE operation*/
router.post('/add', ProcessAddPage);

/* GET route for displaying edit page - UPDATE operation*/
router.get('/edit/:id', DisplayEditPage);

/* POST route for processing edit page - UPDATE operation*/
router.post('/edit/:id', ProcessEditPage);

/* GET route to perform deletion - DELETE operation*/
router.get('/delete/:id', ProcessDeletePage);
