module.exports = function(sequelize, DataTypes) {
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
                Audio_rec.hasMany(models.Audio_time, {
                    as: 'audio_times',
                    foreignKey: "audio_rec_id"
                });
                Audio_rec.hasOne(models.Task, {
                    foreignKey: "task_id"
                });

            }
        }
    );
    return Audio_rec;
}
