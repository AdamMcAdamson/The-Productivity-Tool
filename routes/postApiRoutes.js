var db = require("../models");

module.exports = function(app) {
    app.post("/login", function(req, res) {
        db.User.findOne({
        	where: {
        		username: req.body.username,
        		password: req.body.password
        	}
        }).then(function(dbPost){
        	if(dbPost){
        		console.log(dbPost)
        		res.redirect('/tool?id=' + dbPost.id);
        	}
        	else {
        		console.log("Failed to Find Username/Password Combination - Username: " + req.body.username + "   Password: " + req.body.password);
        		return { status: "failed" };
        	}
        });
    });
};
