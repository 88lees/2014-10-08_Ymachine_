'use strict';

/**
 * Created by wealab04 on 2014-05-23.
 */

var connect = require('./controllers/dbconnect_v1.01.js');
var query = require('./controllers/query.js');
var c = connect.connection();

var express = require('express');
var router1 = express.Router()
    , board = require('./controllers/boardDAO');
var fs = require('fs');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var mkdirp = require('mkdirp');


/* GET home page. */

router1.get('/main1', function(req, res) {
    res.render('machine/machine_jade/043-1_S_main1_machine', { title: 'machine' });
});

router1.get('/intro1', function(req, res) {
    res.render('machine/machine_jade/043-1_S_co_intro1_machine', { title: 'machine' });
});

router1.get('/product_List11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_List1_machine', { title: 'machine' });
});

router1.get('/product_List12', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_List2_machine', { title: 'machine' });
});

router1.get('/directions11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_co_directions1_machine', { title: 'machine' });
});

router1.get('/product1_View11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product1_View1_machine', { title: 'machine' });
});

router1.get('/notice_List11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_notice_List1_machine', { title: 'machine' });
});

router1.get('/notice_view11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_notice_view1_machine', { title: 'machine' });
});

router1.get('/notice_write11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_notice_write1_machine', { title: 'machine' });
});




router1.get('/product_Write11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_Write1_machine', { title: 'machine' });
});


router1.get('/product_View12', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_View2_machine', { title: 'machine' });
});


router1.get('/product_CategoryMod12', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_CategoryMod2_machine', { title: 'machine' });
});


router1.get('/sitemap11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_sitemap1_machine', { title: 'machine' });
});

router1.get('/customer_List11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_customer_List1_machine', { title: 'machine' });
});

router1.get('/customer_View11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_customer_View1_machine', { title: 'machine' });
});

router1.get('/customer_write11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_customer_Write1_machine', { title: 'machine' });
});






router1.get('/customer_List12', function(req, res) {
    res.render('machine/machine_jade/043-1_S_customer_List1_machine2', { title: 'machine' });
});

router1.get('/customer_View12', function(req, res) {
    res.render('machine/machine_jade/043-1_S_customer_View1_machine2', { title: 'machine' });
});

router1.get('/customer_write12', function(req, res) {
    res.render('machine/machine_jade/043-1_S_customer_Write1_machine2', { title: 'machine' });
});












router1.get('/notice_write', function(req, res) {
    res.render('machine/machine_jade/notice_write', { title: 'machine' });
});

router1.get('/notice_su', function(req, res) {
    res.render('machine/machine_jade/notice_su', { title: 'machine' });
});

router1.get('/new_list', function(req, res) {
    res.render('machine/machine_jade/new_list', { title: 'machine' });
});

router1.get('/notice_write111', function(req, res) {
    res.render('machine/machine_jade/043-1_S_notice_sujungwrite1_machine', { title: 'machine' });
});

router1.get('/login', function (req, res) {
    res.render('machine/machine_jade/login', {title: 'Maison Interior'});
});

router1.get('/modifyboard', function (req, res) {
    res.render('machine/machine_jade/modifyboard', {title: 'Maison Interior'});
});
router1.get('/modifyboard2', function (req, res) {
    res.render('machine/machine_jade/modifyboard2', {title: 'Maison Interior'});
});


router1.post('/getlist', board.list);
router1.post('/getlist1', board.list1);
router1.post('/getlist2', board.list2);
router1.post('/getlist3', board.list3);     // 신제품소개 물건창
router1.post('/getlist4', board.list4);     // 신제품소개 서브 메뉴

router1.post('/getsub', board.submenu1);    // 신제품소개 네비게이션바 갯수

router1.post('/getboard', board.get);
router1.post('/getboard2', board.get2);
router1.post('/getboard3', board.get3);
router1.post('/kang', board.get2);

router1.post('/customer_write11', board.insert);
router1.post('/old_write12', board.insert2);

router1.post('/notice_write', board.insert3);

router1.post('/getdata', board.chk);

router1.post('/insertboard', board.insert);

router1.post('/insertboard2', board.insert2);
router1.post('/insertboard2', board.insert3);

router1.post('/updateboard', board.update);
router1.post('/updateboard2', board.update2);
router1.post('/updateboard3', board.update3);



router1.post('/deleteboard', board.delete);
router1.post('/deleteboard2', board.delete2);
router1.post('/deleteboard3', board.delete3);

router1.post('/download', board.download);
router1.post('/download2', board.download2);

router1.post('/upload', multipartMiddleware, board.upload);
router1.post('/OldUpload', multipartMiddleware, board.OldUpload);
router1.post('/NoticeUpload', multipartMiddleware, board.NoticeUpload);

router1.get('/test', function(req, res) {
    res.render('test', { title: 'machine' });
});
module.exports = router1;
