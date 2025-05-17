'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      user2.belongsTo(models.User,{
        foreignKey : "courseid",
        targetKey : "courseid",
        as : "T2"
      })

      // define association here
    }
  }
  user2.init({
    courseid: DataTypes.STRING,
    tech: DataTypes.STRING,
    email: DataTypes.STRING,
    userId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user2',
    freezeTableName:true

  });
  return user2;
};