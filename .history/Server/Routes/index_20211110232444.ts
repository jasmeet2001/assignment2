import express from 'express';
const router = express.Router();
export default router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'home' });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'home' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('index', { title: 'about me' });
});
/* GET projects page. */
router.get('/projects', function (req, res, next) {
  res.render('index', { title: 'projects' });
});
/* GET services page. */
router.get('/services', function (req, res, next) {
  res.render('index', { title: 'services' });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('index', { title: 'contact me' });
});

//module.exports = router;
