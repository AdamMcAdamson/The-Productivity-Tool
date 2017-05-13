var UserObj = {
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
			task_title: "This is Task 1 (id:1) for Topic 1",
			default_position: 0,
			priority: "normal",
			end_date: null,
			step_lists: [{
				id: 20,
				task_id: 1,
				position: 0,
				list_title: "This is Step List 1 (id:1) for Task 1",
				steps: [{
					id: 84,
					step_list_id: 1,
					position: 0, 
					name: "This is Step 1 (id:1) for Step List 1",
					description: "I am describing Step 1 (id:1) for Step List 1",
				},
				{
					id: 85,
					step_list_id: 1,
					position: 1, 
					name: "This is Step 2 (id:2) for Step List 1",
					description: "I am describing Step 2 (id:2) for Step List 1",
				}]
			},
			{
				id: 21,
				task_id: 1,
				position: 1,
				list_title: "This is Step List 2 (id:2) for Task 1",
				steps: [{
					id: 3,
					step_list_id: 2,
					position: 0, 
					name: "This is Step 1 (id:3) for Step List 2",
					description: "I am describing Step 1 (id:3) for Step List 2",
				},
				{
					id: 4,
					step_list_id: 2,
					position: 1, 
					name: "This is Step 2 (id:4) for Step List 2",
					description: "I am describing Step 2 (id:4) for Step List 2",
				}]
			}],
			audio_recs: [{
				id: 1,
				task_id: 1,
				position: 0,
				name: "Audio Recording 1 (id:1) for Task 1",
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
}

module.exports = UserObj;