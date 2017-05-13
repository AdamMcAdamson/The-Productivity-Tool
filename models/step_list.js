module.exports = function(sequelize, DataTypes) {
    var Step_list = sequelize.define("Step_list", {
            list_title: {
                type: DataTypes.STRING,
                allowNull: false
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
        {       
            classMethods: {
                associate: function(models) {
                    Step_list.hasMany(models.Step, {
                        as: 'steps',
                        foreignKey: "step_list_id"
                    });
                }
            }
        }
    );
    return Step_list;
}
