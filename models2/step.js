module.exports = function(sequelize, DataTypes) {
    var Step = sequelize.define("Step", {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            position: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING(2000),
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
                Step.hasOne(models.Step_list, {
                    foreignKey: "step_list_id"
                });
            }
        }
    );
    return Step;
}
