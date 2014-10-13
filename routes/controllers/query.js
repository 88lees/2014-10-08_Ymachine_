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















exports.newmenu = 'select * from m_category where m_category.newORold=1 and ISNULL(m_category.ischecked)'; // 신제품 메뉴 (10-10) 강문식

exports.newcontent= "select * "+                // 신제품 컨텐츠 (10-10) 강문식 시작
"from c_product_list "+                          //
"where c_product_list.category1_code=? "+     //
"and c_product_list.category2_code=? "+       //
"and c_product_list.product_id like '1%' ";  // 신제품 컨텐츠 (10-10) 강문식 끝






exports.usemenu='select * from m_category where m_category.newORold=2 and ISNULL(m_category.ischecked)';   // 중고제품 메뉴 (10-10) 강문식





exports.newdetail = "select * "+                // 신제품 디테일 뷰 (10-10) 강문식 시작
"from m_product_model "+                        //
"where m_product_model.category1_code=? "+   //
"and m_product_model.category2_code=? "+     //
"and m_product_model.product_id=? ";          // 신제품 디테일 뷰 (10-10) 강문식 끝






exports.usedetail = "select * "+                   // 중고제품 디테일 뷰 (10-10) 강문식 시작
    "from m_product_model "+                        //
    "where m_product_model.category1_code=? "+   //
    "and m_product_model.category2_code=? "+     //
    "and m_product_model.product_id=? ";          // 중고제품 디테일 뷰 (10-10) 강문식 끝






exports.usedetailimg = "select * "+                         // 중고제품 디테일 이미지 (10-12) 강문식 시작
"from d_product_picture "+                                   //
"where d_product_picture.category1_code=? "+          //
"and d_product_picture.category2_code=? "+            //
"and d_product_picture.product_id=? ";               // 중고제품 디테일 이미지 (10-12) 강문식 끝







exports.usecontentimg = " select * from c_product_list inner join d_product_picture "+                                 // 중고제품 컨텐츠 + 이미지 (10-10) 강문식 시작
"where c_product_list.category1_code = d_product_picture.category1_code "+                                              //
"and c_product_list.category2_code = d_product_picture.category2_code "+                                                //
"and c_product_list.product_id = d_product_picture.product_id "+                                                         //
"and c_product_list.category1_code=? "+                                                                                      //
"and c_product_list.category2_code=? "+                                                                                      //
"and c_product_list.product_id like '2%' "+                                                                                 //
"group by d_product_picture.category1_code,d_product_picture.category2_code,d_product_picture.product_id "+      //
"order by d_product_picture.category1_code,d_product_picture.category2_code,d_product_picture.product_id ";      //  중고제품 컨텐츠 + 이미지 (10-10) 강문식 끝






exports.newcontentimg = " select * from c_product_list inner join d_product_picture "+                                 // 중고제품 컨텐츠 + 이미지 (10-10) 강문식 시작
    "where c_product_list.category1_code = d_product_picture.category1_code "+                                              //
    "and c_product_list.category2_code = d_product_picture.category2_code "+                                                //
    "and c_product_list.product_id = d_product_picture.product_id "+                                                         //
    "and c_product_list.category1_code=? "+                                                                                      //
    "and c_product_list.category2_code=? "+                                                                                      //
    "and c_product_list.product_id like '1%' "+                                                                                 //
    "group by d_product_picture.category1_code,d_product_picture.category2_code,d_product_picture.product_id "+      //
    "order by d_product_picture.category1_code,d_product_picture.category2_code,d_product_picture.product_id ";      //  중고제품 컨텐츠 + 이미지 (10-10) 강문식 끝








exports.viewtittle3 = "select * "+                              // 중고제품 디테일뷰  맨 위에 제목  시작
"from c_product_list "+                                         //
"where c_product_list.category1_code=? "+                    //
"and c_product_list.category2_code=? "+                      //
"and c_product_list.product_id=? ";                            //  중고제품 디테일뷰  맨 위에 제목  끝



exports.mainnotice = "SELECT * FROM notice order by id desc limit 3";       // 메인화면 공지사항 3개만 보이기