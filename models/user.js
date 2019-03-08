module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
  
      },
      user_password: {
        type: DataTypes.STRING,
       allowNull: false,
       validate: {
        len: [7,14]
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
    });
  
    // User.associate = function(models) { 
    //   User.belongsTo(models.Rooms, {through:models.Brackets},{
    //     onDelete: "cascade"
    //   })
    // }
    return User;
  };