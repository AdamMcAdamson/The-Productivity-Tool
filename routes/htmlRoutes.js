var db = require("../models");

var path = require("path");

var apiFunc = require('./apiFunction.js');

module.exports = function(app) {

    app.get("/tool", function(req, res) {
        apiFunc.findUser(res.query.id, function(userData){
            if(userData){
                res.render("user", {uservar: userData});
            }
            else {
                console.log("Invalid User id, Redirecting to Login page");
                res.redirect("/");
            }
        });
    });

    app.get("/", function(req, res){
        res.render("index");
    });
};
