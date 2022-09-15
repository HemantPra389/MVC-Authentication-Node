const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

const home = (req, res, next) => {
    res.render('home');
}
const register = (req, res, next) => {
    res.render('register');
}
const login = (req, res, next) => {
    res.render('login');
}
const postregister = (req, res, next) => {
    bcrypt.hash(req.body.password, 12, function (err, hash) {

        let user = User({
            email: req.body.email,
            password: hash
        });
        user.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.render('secrets');
            }
        });
    })
}
const postlogin = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    User.findOne({
        email: email
    }, function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, function (err, result) {
                    if (result === true) {
                        if (foundUser.password === password) {
                            res.render('secrets');
                        }
                    }
                })
            }
        }
    })
}

module.exports = {
    home,
    register,
    login,
    postregister,
    postlogin
}