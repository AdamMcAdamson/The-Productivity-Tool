var db = require("../models");

module.exports = {
	findUser: function(userId, callback) {
	    db.User.findOne({
	        where: {
	            id: userId
	        },
	        include: [{
	            model: Topic,
	            include: [{
	                model: Task,
	                include: [{
	                    model: Step_list,
	                    include: [{
	                        model: Step
	                    }]
	                }, {
	                    model: Audio_rec,
	                    include: [{
	                        model: Audio_time
	                    }]
	                }]
	            }]
	        }]
	    }).then(function(data){
	    	callback(data);
	    });
	},

	handleType: function(type){
		var dbType = '';
		switch (type.toLowerCase()) {
            case "topic":
            	dbType = "Topic";
                break;
            case "task":
            	dbType = "Task";
                break;
            case "step_list":
            	dbType = "Step_list";
                break;
            case "step":
            	dbType = "Step";
                break;
            case "audio_rec":
            	dbType = "Audio_rec";
                break;
            case "audio_time":
            	dbType = "Audio_time";
                break;
            default:
                console.log('---- FROM apiFunctions.js handleType() ----');
                console.log('----------------------------------------------------------------');
                console.log('[Error] Invalid type: ' + type);
                console.log('data:   ' + JSON.stringify(data, 2, null));
                return;
        }
        return dbType;    
	},

	create: function(type, data, callback){
    	db[this.handleType(type)].create(data).then(function(){
    		if(typeof callback === "function"){
    			callback();
    		}
    	});
    },

    update: function(type, id, data, callback) {
    	db[this.handleType(type)].update(data, { where: {id: id} }).then(function(){
    		if(typeof callback === "function"){
    			callback();
    		}   
    	});
    },

	getInfo: function(type, id, data, callback) {
		var dbType = this.handleType(type);
		var includeObj = null;
		var layoutIndex = -1;
		var arraySideIndex = -1
		var layout = this.schemaLayout;

		for (var i = 0; i < layout.length; i ++){
			if(layoutIndex < 0){
				var layoutIndex = layout[i].indexOf(type);
				var arraySideIndex = i;
			}	
		}

		
		console.log(layout.length);
		console.log(arraySideIndex);
		console.log(layoutIndex);

		var currentObj = [];
		var previousObj = [];

		for(var i = arraySideIndex; i < layout.length; i ++){
			for(var j = layout[0].length-1; j > layoutIndex; j--){
				console.log(layout[i][j] + ' | i: ' + i + " | j: " + j);
				if(layout[i][j] !== null){
					currentObj[j-layoutIndex] = {model: layout[i][j]};
					console.log(previousObj + "   " + previousObj.length);
					if(previousObj.length < j && previousObj.length !== 0){
						currentObj[j-layoutIndex].include = [Object.assign({}, previousObj)];
						console.log("including: " + JSON.stringify(currentObj[j-layoutIndex].include) + " | i: " + i + " | j: " + j);
					} else {

					}
				}
				previousObj[i] = Object.assign({}, currentObj);
			}
		}
		var includeObj = currentObj;
		console.log(JSON.stringify(currentObj));

		// db[dbType].findOne({
	 //        where: {
	 //            id: id
	 //        },
	 //        include: [includeObj]
	 //    }).then(function(data){
	 //    	callback(data);
	 //    });
	},

	schemaLayout: [
		["User", "Topic", "Task", "Step_list", "Step"], 
		[null, null, null, "Audio_rec", "Audio_time"]
	]

}