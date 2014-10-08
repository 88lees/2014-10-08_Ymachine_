/**
 * Created by wealab04 on 2014-05-30.
 */
//쿼리를 나열하고 exports를 통해 배포하도록 한다.

exports.chkAccount = 'select * from account where id=? and pswd=?';

exports.boardlist = 'SELECT * FROM customer_board order by id desc';
exports.boardlist2 = 'SELECT * FROM old_customer order by id desc';

exports.boardlist1 = 'SELECT * FROM notice order by id desc';
/*
exports.boardlist2 = 'select * from c_new_product_category_level1 where category2_code=00 order by category1_code asc';  //신제품 서브 대메뉴
exports.boardlist4 = 'select * from c_new_product_category_level1 where category2_code!=00 order by category1_code asc';  // 신제품 서브 소메뉴*/

exports.list_menu = 'select *from c_new_product_category_level1 ORDER by category1_code,category2_code';              // 중고제품 리스트 순서

exports.boardlist3 = 'SELECT * FROM customer_board order by id desc'; //신제품 물건선택창

exports.boardlist4 = 'select count(DISTINCT c_new_product_category_level1.category2_code) count from c_new_product_category_level1 where c_new_product_category_level1.category1_code=? and c_new_product_category_level1.category2_code!=00';// 신제품 왼쪽 네비게이션바 갯수

exports.boardget3 = 'select * from notice where id=?';
exports.boardget = 'select * from customer_board where id=?';
exports.boardget2 = 'select * from old_customer where id=?';
/*exports.boardget2 = 'select * from notice where id=?';*/



// title, content, file, writer, href
exports.boardinsert = 'insert into customer_board(id, title, content, writer,company, contact, email, date, file) values(null,?,?,?,?,?,?,now(),?)';
exports.boardinsert2 = 'insert into old_customer(id, title, content, writer,company, contact, email, date, file) values(null,?,?,?,?,?,?,now(),?)';
// title, content, file, href, id

exports.boardinsert3 = 'insert into notice(id, title, content, date, file ) values(null,?,?,now(),?)';

exports.boardmodify = 'update customer_board set title=?, content=?, writer=?, company=?, contact=?, email=?, date=now() where id=?';
exports.boardmodify2 = 'update old_customer set title=?, content=?, writer=?, company=?, contact=?, email=?, date=now() where id=?';
exports.boardmodify3 = 'update notice set title=?, content=? where id=?';


exports.boardremove = 'delete from customer_board where id=?';
exports.boardremove2 = 'delete from old_customer where id=?';
exports.boardremove3 = 'delete from notice where id=?';

exports.getlist_cate = 'select *from test_category_level1 ORDER by category1_code,category2_code';

