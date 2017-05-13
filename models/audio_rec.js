 module.exports = function(sequelize, DataTypes){
 	var Audio_rec = sequelize.define("Audio_rec", {
		name: {
			type: DataTypes.STRING, 
			allowNull: false,
		},
	    position: {
			type: DataTypes.INTEGER,
			allowNull: false
	    },
	    file_data: {
	    	type: DataTypes.BLOB('long'),
	    	allowNull: false
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