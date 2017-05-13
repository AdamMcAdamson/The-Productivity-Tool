module.exports = function(sequelize, DataTypes) {
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
                validate: { in : [
                        ["normal", "low", "medium", "high"]
                    ]
                }
            },
            end_date: {
                type: DataTypes.DATE,
                validate: {
                    isAfter: Sequelize.NOW
                }
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
        },,
        classMethods: {
            associate: function(models) {
                Task.hasMany(models.Audio_rec, {
                    as: 'audio_recs',
                    foreignKey: "task_id"
                });

                Task.hasMany(models.Step_list, {
                	ad: 'step_lists',
                	foreignKey: 'task_id'
                });

                Task.hasOne(models.Topic, {
                    foreignKey: "topic_id"
                });
            }
        });
    return Task;
}
