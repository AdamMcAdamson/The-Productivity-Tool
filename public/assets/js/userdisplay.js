
$( document ).ready(function() {
    $(".Btasks").hide();
    $(".list").hide();
});
$(document).on("click", ".btn",function(){
	var sid = this.id;
	var p = sid.search("_");
	if(p > 9){
		var use = sid.substr(p,sid.length);
		use = "section-steplist"+use;
	}else if(p > 1){
		var use = sid.substr(p,sid.length);
		use = "section-task"+use;
	}
	
	console.log(use);
	console.log(p);
	$("#"+use).show();

});
$(document).on("click", ".hide",function(){
	$(".Btasks").hide();
    $(".list").hide();
});
