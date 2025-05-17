'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User1', {
      id: {
        allowNull: false,
        autoIncrement: true,
         primaryKey : true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      courseid:{
        type : Sequelize.STRING,
        unique : true ,
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
       
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      
    },{
      freezeTableName: true,
      timeStamp : false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User1');
  }
};