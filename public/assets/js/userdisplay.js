var uservar ={
	id: 1,
	username: "AdamMcAdamson",
	password: "hihihi",
	display_name: "Adam Brunn",
	topics: [{
		id: 1,
		user_id: 1,
		topic_name: "Topic 1",
		position: 0,
		tasks: [{
			id: 2,
			topic_id: 1,
			task_title: "Task 1",
			default_position: 0,
			priority: "normal",
			end_date: null,
			step_lists: [{
				id: 20,
				task_id: 1,
				position: 0,
				list_title: "List 1",
				steps: [{
					id: 84,
					step_list_id: 1,
					position: 0, 
					name: "Step 1",
					description: "I am describing Step 1",
				},
				{
					id: 85,
					step_list_id: 1,
					position: 1, 
					name: "Step 2",
					description: "I am describing Step 2",
				}]
			},
			{
				id: 21,
				task_id: 1,
				position: 1,
				list_title: "List 2",
				steps: [{
					id: 3,
					step_list_id: 2,
					position: 0, 
					name: "Step 1",
					description: "I am describing Step 1",
				},
				{
					id: 4,
					step_list_id: 2,
					position: 1, 
					name: "Step 2",
					description: "I am describing Step 2",
				}]
			}],
			audio_recs: [{
				id: 1,
				task_id: 1,
				position: 0,
				name: "Audio Recording 1",
				file_data: "(LONGBLOB)0100101001001010010010100001001",
				audio_times: [{
					id: 1,
					rec_id: 1,
					time_offset: 10, //(seconds),
					summary: "This is the summary for Audio Time 1 (id:1) for Audio Recording 1",
					color_code: '34993A', // idk the type in obj form, it shouldn't matter
				},
				{
					id: 2,
					rec_id: 1,
					time_offset: 40, //(seconds),
					summary: "This is the summary for Audio Time 2 (id:2) for Audio Recording 1",
					color_code: '34993A', // idk the type in obj form, it shouldn't matter
				}]
			},
			{
				id: 2,
				task_id: 1,
				position: 1,
				name: "Audio Recording 2 (id:2) for Task 1",
				file_data: "(LONGBLOB)0100101001001010010010100001001",
				audio_times: [{
					id: 3,
					rec_id: 2,
					time_offset: 10, //(seconds),
					summary: "This is the summary for Audio Time 1 (id:3) for Audio Recording 2",
					color_code: '34993A', // idk the type in obj form, it shouldn't matter
				},
				{
					id: 4,
					rec_id: 2,
					time_offset: 40, //(seconds),
					summary: "This is the summary for Audio Time 2 (id:4) for Audio Recording 2",
					color_code: '34993A', // idk the type in obj form, it shouldn't matter
				}]
			}]
		}]
	}]
};
$( document ).ready(function() {
    $(".Btasks").hide();
    $(".list").hide();

});
$(document).on("click", "#newTopic",function(){
	event.preventDefault();
        var input = {}
        input.data = {
            Topic_name : $("#signName").val().trim()
        };
        $.post("/api/add/user", input)
        .done(function(data) {
            if(data.status !== "success"){
                console.log("user verification failed");
            }
        });
});
$(document).on("click", ".btn",function(){
	var sid = this.id;

	var p = sid.search("_");
	console.log("detected a click");
	if(p === 9){
		var use = parseInt(sid.substr(p+1,sid.length));
		use = "section-steplist"+use;
	}else if(p > 1){
	console.log("detected task click");
		var use = parseInt(sid.substr(p+1,sid.length));
		console.log("id = "+ use);
		for (var i = 0; i < uservar.topics[0].tasks.length; i++) {
			if(uservar.topics[0].tasks[i].id === use){
				console.log("got to append line");
				$(".modal-header").append("<h5>"+uservar.topics[0].tasks[i].task_title+"</h5>");
				for (var j = 0; j < uservar.topics[0].tasks[i].step_lists.length; j++) {
					$(".modal-body").append("<div class='task_"+j+
						"'><button class='btn' id='task_"+j+
						"'><h5>"+uservar.topics[0].tasks[i].step_lists[j].list_title+"</h5></div>");
				}
				
			}
		}
	}
});
$(document).on("click", ".hide",function(){
	$(".Btasks").hide();
    $(".list").hide();
});
