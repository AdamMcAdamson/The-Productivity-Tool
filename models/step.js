module.exports = function(sequelize, DataTypes) {
    var Step = sequelize.define("Step", {
            name: {
                type: DataTypes.STRING,
                allowNull: false
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
        }
    );
    return Step;
}
