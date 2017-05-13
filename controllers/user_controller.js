var express = require("express");

var router = express.Router();

// create all our routes and set up logic within
router.get("/", function(req, res) {
    res.render("index",{});
});
router.get("/:id", function(req, res) {
	res.render("user");
});
router.post("/", function(req, res) {
  
});