var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

// create all our routes and set up logic within
Handlebars.registerHelper('each_sort', function(parent, child, options) {

	var type = options || "position";

	var sort = {
		'position': function(c, i){ return parent[c][i].position },
		'priority': function(p,c){},
		'time': function(p,c){}
	}
	
	var children = [];
	for(var i = 0; i < parent[child].length; i++){
		children[sort[type](child, i)] = parent[child][i];

	}
	
});

app.get("/", function(req, res) {
    res.render("index");
});
app.get("/:id", function(req, res) {
	res.render("user");
});
app.post("/", function(req, res) {
  
});

app.listen(port);
