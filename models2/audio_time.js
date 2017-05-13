module.exports = function(sequelize, DataTypes) {
    var Audio_time = sequelize.define("Audio_time", {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            summary: {
                type: DataTypes.STRING
            },
            time_offset: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            color_code: {
                type: DataTypes.CHAR(6),
                allowNull: false,
                defaulValue: "34993A",
                validate: {
                    len: [6, 6],
                    is: /([0-9a-fA-F]{6})/
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
        },
        classMethods: {
            associate: function(models) {
                // Using additional options like CASCADE etc for demonstration
                // Can also simply do Task.belongsTo(models.User);
                Audio_time.hasOne(models.Audio_rec, {
                    foreignKey: "audio_rec_id"
                });
            }
        }
    );
    return Audio_time;
}
