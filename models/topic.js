 module.exports = function(sequelize, DataTypes){
 	var Topics = sequelize.define("Topics", {
		topic_name: {
			type: DataTypes.STRING, 
			allowNull: false,
		},
	    position: {
			type: DataTypes.INTEGER,
			allowNull: false
	    },
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