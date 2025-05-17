'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.user2,{foreignKey:"courseid", as:'T2'})
      
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    courseid : DataTypes.STRING
  }, {
    sequelize,
    tableName: 'User1',
  });
  return User;
};