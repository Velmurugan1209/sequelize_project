"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user2", {
      id: {
        allowNull: false,
        autoIncrement: true, 
        type: Sequelize.INTEGER,
        unique : true ,
      },
      courseid: {
        type: Sequelize.STRING,
        references: {
          model: "User1",
          key: "courseid",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tech: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },{freezeTableName: true,

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user2");
  },
};
