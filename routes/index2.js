var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('lease/intro', { title: 'Express' });
});

router.get('/mc11', function(req, res) {
    res.render('lease/mc', { title: 'Express' });
});

router.get('/les21', function(req, res) {
    res.render('lease/les', { title: 'Express' });
});
router.get('/intro21', function(req, res) {
    res.render('lease/intro2', { title: 'Express' });
});
router.get('/business21', function(req, res) {
    res.render('lease/business1', { title: 'Express' });
});
router.get('/business22', function(req, res) {
    res.render('lease/business2', { title: 'Express' });
});
router.get('/business23', function(req, res) {
    res.render('lease/business3', { title: 'Express' });
});
router.get('/business24', function(req, res) {
    res.render('lease/business4', { title: 'Express' });
});
router.get('/write21', function(req, res) {
    res.render('lease/write', { title: 'Express' });
});
router.get('/directions21', function(req, res) {
    res.render('lease/directions', { title: 'Express' });
});
router.get('/sitemap21', function(req, res) {
    res.render('lease/sitemap', { title: 'Express' });
});
router.get('/main', function(req, res) {
    res.render('lease/main', { title: 'Express' });
});
router.get('/list', function(req, res) {
    res.render('lease/list', { title: 'Express' });
});
module.exports = router;
