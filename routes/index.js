var express = require('express');
var router = express.Router();
var userModel = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/register', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    userModel.findOne({
            'username': username
        })
        .then(data => {
            if (data) {
                res.json('da ton tai')
            } else {
                userModel.create({
                        'username': username,
                        'password': password
                    })
                    .then(data => {
                        res.json('thanh cong')
                    })
            }
        })

    .catch(err => {
        res.status(500).json('that bai')
    })
});
router.post('/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    userModel.findOne({
            'username': username,
            'password': password
        })
        .then(data => {
            if (data) {
                res.json('dang nhap thanh cong')
            } else {
                res.status(300).json('tai khoan chua ton tai')
            }
        })
        .catch(err => {
            res.status(500).json('dang nhap that bai')
        })
})
module.exports = router;