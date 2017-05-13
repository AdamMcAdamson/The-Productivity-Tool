var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var userObj = require("./userObjExample_js.js");

// var User = require("/models/user.js");
// var Topic = require("/models/topic.js");
// var Task = require("/models/task.js");
// var Step_list = require("/models/step_list.js");
// var Step = require("/models/step.js");
// var Audio_rec = require("/models/audio_rec.js");
// var Audio_time = require("/models/audio_time.js");

// Topic.belongsTo(User);
// Task.belongsTo(Topic);
// Step_list.belongsTo(Task);
// Step.belongsTo(Step_list);
// Audio_rec.belongsTo(Task);
// Audio_time.belongsTo(Audio_rec);

var port = 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

var hbs = exphbs.create({
	defaultLayout: "main",
  	helpers: {
  		each_sort: function(parent, child, options) {
  			console.log(parent.id);
  			console.log(child);
  			console.log(options);
			var type = options || "position";
			console.log(type);
			var sort = {
				'position': function(c, i){ 
					console.log(parseInt(parent[c][i].position));
					return parseInt(parent[c][i].position); },
				'priority': function(c,i){ 
					console.log(parseInt(parent[c][i].default_position));
					return parseInt(parent[c][i].default_position); }
			}
	
			var children = [];
			for(var i = 0; i < parent[child].length; i++){
				children[sort[type](child, i)] = parent[child][i];
			}
			console.log(children.toString());
			return children;
		}
	}
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

// create all our routes and set up logic within

// Handlebars.registerHelper('each_sort', function(parent, child, options) {

// 	var type = options || "position";

// 	var sort = {
// 		'position': function(c, i){ return parent[c][i].position; },
// 		'priority': function(p,c){ return parent[c][i].priority; }
// 	}
	
// 	var children = [];
// 	for(var i = 0; i < parent[child].length; i++){
// 		children[sort[type](child, i)] = parent[child][i];
// 	}
// 	return children;

// });

app.get("/", function(req, res) {
    res.render("index");
});
app.get("/:id", function(req, res) {
	res.render("user",{uservar: userObj});
});
app.post("/", function(req, res) {
  
});

app.listen(port);
