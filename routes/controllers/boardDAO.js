'use strict';

/**
 * Created by wealab04 on 2014-05-23.
 */

var connect = require('../controllers/dbconnect_v1.01.js');
var query = require('../controllers/query.js');
var c = connect.connection();
var fs = require('fs'),
    path = require('path'),
    mime = require('mime');

//연결로그 출력
c.on('connect', function () {
    console.log('DataBase connected');
}).on('error', function (err) {
    console.log('Client error: ' + err);
}).on('close', function (hadError) {
    console.log('Client closed');
});

exports.chk = function (req, res) {
    var id = req.body.account;
    var pswd = req.body.pswd;
    var sending = [];
    console.log('1: ' + id);
    console.log('2: ' + pswd);
    c.query(query.chkAccount, [id, pswd]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
            console.log('asdsad ' + sending);
        });
    }).on('end', function () {

        if (sending[0] != null) {
            req.session.role = sending[0].role;
            var obj = {sending: sending};
            res.send(200, obj);
        } else {
            res.send(200, null);
        }
    })
};
exports.list = function (req, res) {
    var sending = [];
    console.log('this is get list000');
    c.query(query.boardlist, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.list1 = function (req, res) {
    var sending = [];
    console.log('this is get list111');
    c.query(query.boardlist1, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);

        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.list2 = function (req, res) {
    var sending = [];

    console.log('this is g22222et list222');
    c.query(query.boardlist2, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
            console.log(sending);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.list3 = function (req, res) {                                                       // 신제품소개 물건창 시작
    var sending = [];

    console.log('this is get list3333');
    c.query(query.boardlist3, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};                                                                                              // 신제품소개 물건창 ㄲㅌ


exports.list4 = function (req, res) {                                                       // 신제품소개 서브 메뉴 시작
    var sending = [];

    console.log('this is get list4444');
    c.query(query.boardlist4, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};                                                                                               // 신제품소개 서브 메뉴 끝


exports.get = function (req, res) {
    var id = req.body.id;
    var sending = [];
    c.query(query.boardget, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};
exports.get3 = function (req, res) {
    var id = req.body.id;
    var sending = [];
    c.query(query.boardget3, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};


exports.get2 = function (req, res) {
    var id = req.body.id;
    var sending = [];
    console.log("id는=");
    console.log(id);
    c.query(query.boardget2, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};


exports.submenu1 = function (req, res) {                                                         // 신제품 네비게이션바 갯수 시작
    var category1_code = "0" + req.body.id10;
    var sending = [];
    console.log("서브 id=");
    console.log(category1_code);
    c.query(query.boardlist4, [ category1_code ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};                                                                                                  // 신제품 네비게이션바 갯수 끝


exports.insert = function (req, res) {
    var title = req.body.usedInputTitle;
    var content = req.body.usedInputContent;
    var writer = req.body.usedInputname;
    var company = req.body.usedInputCompany;
    var contact = req.body.usedInputCall;
    var email = req.body.usedInputEmail;
    if (email == null || email == '') {
        email = '이메일 입력 안함';
    }
    console.log('title : ' + title)
    // title, content, file, writer, href
    c.query(query.boardinsert, [ title, content, writer, company, contact, email ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
    });
};

exports.insert2 = function (req, res) {
    var title = req.body.usedInputTitle;
    var content = req.body.usedInputContent;
    var writer = req.body.usedInputname;
    var company = req.body.usedInputCompany;
    var contact = req.body.usedInputCall;
    var email = req.body.usedInputEmail;
    if (email == null || email == '') {
        email = '이메일 입력 안함';
    }
    console.log('title2 : ' + title)
    // title, content, file, writer, href
    c.query(query.boardinsert2, [ title, content, writer, company, contact, email ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
    });
};

exports.insert3 = function (req, res) {
    var title = req.body.title;
    var content = req.body.content;
    console.log('title2 : ' + title)
    console.log('title2 : ' + content)
    // title, content, file, writer, href
    c.query(query.boardinsert3, [ title, content ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        res.render('machine/machine_jade/043-1_S_notice_List1_machine', {title: 'Mesong'});
    });
};

exports.insertF = function (req, res) {
    var file = req.files.file;
    var dir = '\public/images/';
    var name = new Date().getTime() + file.name;

    if (file.type == 'image/jpeg' || file.type == 'image/png') {
        fs.readFile(file.path, function (error, data) {
            fs.writeFile(dir + name, data, function (error) {
                if (error) {
                    throw error
                }
                res.send(name);
            });
        });

    } else {
        res.send(500, '이미지파일만 첨부가능합니다.');
    }
};

exports.update = function (req, res) {
    var id = req.body.id;
    var title = req.body.title;
    var content = req.body.content;
    var contact = req.body.contact;
    var writer = req.body.writer;
    var company = req.body.company;
    var email = req.body.email;

    console.log(title);
    console.log(content);
    console.log(id);

// title, content, file, href, id
    c.query(query.boardmodify, [ title, content, writer , company, contact, email, id ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '수정하였습니다.';
        res.render('machine/machine_jade/043-1_S_customer_List1_machine', {title: 'Ylease'});
    });
};
exports.update2 = function (req, res) {
    var id = req.body.id;
    var title = req.body.title;
    var content = req.body.content;
    var contact = req.body.contact;
    var writer = req.body.writer;
    var company = req.body.company;
    var email = req.body.email;

    console.log(title);
    console.log(content);
    console.log(id);

// title, content, file, href, id
    c.query(query.boardmodify2, [ title, content, writer , company, contact, email, id ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '수정하였습니다.';
        res.render('machine/machine_jade/043-1_S_customer_List1_machine2', {title: 'Ylease'});
    });
};


exports.update3 = function (req, res) {
    var id = req.body.id4;
    var title = req.body.title;
    var content = req.body.content;
    console.log(id);
    console.log(title);
    console.log(content);

// title, content, file, href, id
    c.query(query.boardmodify3, [title, content, id]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '수정하였습니다.';
        res.render('machine/machine_jade/043-1_S_notice_List1_machine', {title: 'Ylease'});
    });
};


exports.delete = function (req, res) {
    var id = req.body.id;
    console.log(id);
    c.query(query.boardremove, [id]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '삭제하였습니다.';
        res.render('machine/machine_jade/043-1_S_notice_List1_machine', {title: 'Ylease'});
    });
};

exports.delete2 = function (req, res) {
    var id = req.body.id;
    console.log(id);
    c.query(query.boardremove2, [id]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '삭제하였습니다.';
        res.render('machine/machine_jade/043-1_S_notice_List1_machine', {title: 'Ylease'});
    });
};

exports.delete3 = function (req, res) {
    var id = req.body.id;
    console.log('ss ' + id);
    c.query(query.boardremove3, [id]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '삭제하였습니다.';
        res.render('machine/machine_jade/043-1_S_notice_List1_machine', {title: 'Ylease'});
    });
};

exports.download = function(req, res){
    console.log('ss ' + req.body.up);
    var file = req.body.up, // file path
        filename = path.basename(file),
        mimetype = mime.lookup(file);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);

    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
};

exports.download2 = function(req, res){
    console.log('ss ' + req.body.up);
    var file = req.body.up, // file path
        filename = path.basename(file),
        mimetype = mime.lookup(file);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);

    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
};

exports.upload = function(req, res){
    var imageLength = req.files.file.length;
    var MultiPath='';
    for (var i = 0; i != imageLength - 1; i++) {
        var memo = req.param('memo');
        var imageFile = req.files.file[i];
        /*console.log(req.files.file[i].name);*/
        if (imageFile) {
            // 변수를 선언합니다.
            var name = imageFile.name;
            var path = imageFile.path;
            var type = imageFile.type;
            /*console.log('sad' + name);
             console.log('sad ' + path);
             console.log('sad' + type);*/

            // 이미지 파일 확인
            if (type.indexOf('image') != -1) {

                console.log('성공');
                // 이미지 파일의 경우: 파일 이름을 변경합니다.
                var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
                MultiPath += outputPath+'*';
                console.log(outputPath);
                var ws = fs.createWriteStream(outputPath);
                fs.createReadStream(path).pipe(ws);
                /*res.redirect('/write');*/
            } else {
                // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
                console.log('실패1');
                fs.unlink(path, function (error) {
                    res.send(400);
                });
            }
        } else {
            // 파일이 없을 경우
            console.log('실패2');
            res.send(404);
        }
    }
    var title = req.body.usedInputTitle;
    var content = req.body.usedInputContent;
    var writer = req.body.usedInputname;
    var company = req.body.usedInputCompany;
    var contact = req.body.usedInputCall;
    var email = req.body.usedInputEmail;
    if (email == null || email == '') {
        email = '이메일 입력 안함';
    }
    console.log('title : ' + title)
    console.log('path : ' + MultiPath)
    // title, content, file, writer, href
    c.query(query.boardinsert, [ title, content, writer, company, contact, email, MultiPath ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        res.render('machine/machine_jade/043-1_S_customer_Write1_machine', {title: 'Mesong'});
    });
};

exports.OldUpload = function(req, res){
    console.log(req.files);
    var imageLength = req.files.file.length;
    var MultiPath='';
    for (var i = 0; i != imageLength - 1; i++) {
        var memo = req.param('memo');
        var imageFile = req.files.file[i];
        /*console.log(req.files.file[i].name);*/
        if (imageFile) {
            // 변수를 선언합니다.
            var name = imageFile.name;
            var path = imageFile.path;
            var type = imageFile.type;
            /*console.log('sad' + name);
             console.log('sad ' + path);
             console.log('sad' + type);*/

            // 이미지 파일 확인
            if (type.indexOf('image') != -1) {

                console.log('성공');
                // 이미지 파일의 경우: 파일 이름을 변경합니다.
                var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
                MultiPath += outputPath+'*';
                console.log(outputPath);
                var ws = fs.createWriteStream(outputPath);
                fs.createReadStream(path).pipe(ws);
                /*res.redirect('/write');*/
            } else {
                // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
                console.log('실패1');
                fs.unlink(path, function (error) {
                    res.send(400);
                });
            }
        } else {
            // 파일이 없을 경우
            console.log('실패2');
            res.send(404);
        }
    }
    var title = req.body.usedInputTitle;
    var content = req.body.usedInputContent;
    var writer = req.body.usedInputname;
    var company = req.body.usedInputCompany;
    var contact = req.body.usedInputCall;
    var email = req.body.usedInputEmail;
    if (email == null || email == '') {
        email = '이메일 입력 안함';
    }
    console.log('title : ' + title)
    console.log('path : ' + MultiPath)
    // title, content, file, writer, href
    c.query(query.boardinsert2, [ title, content, writer, company, contact, email, MultiPath ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        res.render('machine/machine_jade/043-1_S_customer_Write1_machine', {title: 'Mesong'});
    });
};

exports.NoticeUpload = function(req, res){
    var imageLength = req.files.file.length;
    var MultiPath='';
    for (var i = 0; i != imageLength - 1; i++) {
        var memo = req.param('memo')
        var imageFile = req.files.file[i];
        /*console.log(req.files.file[i].name);*/
        if (imageFile) {
            // 변수를 선언합니다.
            var name = imageFile.name;
            var path = imageFile.path;
            var type = imageFile.type;
            /*console.log('sad' + name);
             console.log('sad ' + path);
             console.log('sad' + type);*/

            // 이미지 파일 확인
            if (type.indexOf('image') != -1) {

                console.log('성공');
                // 이미지 파일의 경우: 파일 이름을 변경합니다.
                var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
                MultiPath += outputPath+'*';
                console.log(outputPath);
                var ws = fs.createWriteStream(outputPath);
                fs.createReadStream(path).pipe(ws);
                /*res.redirect('/write');*/
            } else {
                // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
                console.log('실패1');
                fs.unlink(path, function (error) {
                    res.send(400);
                });
            }
        } else {
            // 파일이 없을 경우
            console.log('실패2');
            res.send(404);
        }
    }
    var title = req.body.title;
    var content = req.body.content;
    console.log('title : ' + title)
    console.log('path : ' + MultiPath)
    // title, content, file, writer, href
    c.query(query.boardinsert3, [ title, content, MultiPath ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        res.render('machine/machine_jade/043-1_S_notice_List1_machine', {title: 'Mesong'});
    });
};