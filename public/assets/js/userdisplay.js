var uservar;
$( document ).ready(function() {
    $(".Btasks").hide();
    $(".list").hide();

});
$(document).on("click", "#newTopic",function(){
	
	});
$(document).on("click", ".btn",function(){
	var sid = this.id;
	var p = sid.search("_");
	console.log("detected a click");
	if(p > 9){
		var use = sid.substr(p,sid.length);
		use = "section-steplist"+use;
	}else if(p > 1){
	console.log("detected task click");
		var dispArr = [];
		var use = sid.substr(p,sid.length);
		for (var i = 0; i < uservar.topics.tasks.length; i++) {
			if(uservar.topics.tasks[i].id === use){
				console.log("got to append line");
				$(".modal-header").append("<h5>"+uservar.topics.tasks[i].step_lists.list_title+"</h5>");
			}
		}
	}
	
	console.log(use);
	console.log(p);

});
$(document).on("click", ".hide",function(){
	$(".Btasks").hide();
    $(".list").hide();
});
