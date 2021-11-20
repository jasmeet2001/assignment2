"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
//get reference to the game model class
const game_1 = __importDefault(require("../Models/game"));
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'home', page: 'home' });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'home', page: 'home' });
});
/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'about me', page: 'about' });
});
/* GET projects page. */
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'projects', page: 'projects' });
});
/* GET services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'services', page: 'services' });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'contact me', page: 'contact' });
});
/*GET games-list */
router.get('/games-list', function (req, res, next) {
    //similar to db.game.find()
    game_1.default.find(function (err, gamesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'games-list', page: 'Games Collection', games: gamesCollection });
    });
});
//module.exports = router;
//# sourceMappingURL=index.js.map