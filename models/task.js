 module.exports = function(sequelize, DataTypes){
 	var Task = sequelize.define("Task", {
		task_title: {
			type: DataTypes.STRING, 
			allowNull: false,
		},
	    default_position: {
			type: DataTypes.INTEGER,
			allowNull: false
	    },
	    priority: {
	    	type: DataTypes.STRING,
	    	allowNull: false,
	    	defaultValue: "normal",
	    	validate: {
	    		in: [["normal", "low", "medium", "high"]]
	    	}
	    },
	    end_date: {
	    	type: DataTypes.DATE,
	    	validate: {
	    		isAfter: Sequelize.NOW
	    	}
	    }
	    state: {
	    	type: DataTypes.STRING,
	    	allowNull: false,
	    	defaultValue: "active",
	    	validate: {
	    		in: [["active", "disabled"]]
	    	}
 		}
 	})
 }