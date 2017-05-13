module.exports = function(sequelize, DataTypes) {
    var Topic = sequelize.define("Topic", {
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
                validate: { in : [
                        ["active", "disabled"]
                    ]
                }
            }
        },
        classMethods: {
            associate: function(models) {
                Topic.hasMany(models.Task, {
                    as: 'tasks',
                    foreignKey: "topic_id"
                });
                Topic.hasOne(models.User, {
                    foreignKey: "user_id"
                });

            }
        }
    });
return Topics;
}
