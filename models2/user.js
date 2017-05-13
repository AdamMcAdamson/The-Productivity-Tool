module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isAlphanumeric: true,
                    len: [4, 20]
                }
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            display_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [4, 40]
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
                User.hasMany(models.Topic, {
                    as: 'topics',
                    foreignKey: "user_id"
                });
            }
        });
    return User;
}
