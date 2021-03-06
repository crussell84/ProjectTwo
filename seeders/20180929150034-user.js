'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'demouser01',
      password: '$2a$10$U66753g1TRocqV2LgoX5ou3IWvNja5nUt0l1fN1Vr6jS.phQFJ6ia',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'demouser02',
      password: '$2a$10$pza5F76HUSDb9PRBMhghwe1Km3hFzKvkz6U7GQVTt2X0hWvFyCVgq',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    const users = await queryInterface.sequelize.query(
      `SELECT id from Users;`
    );

    const userRows = users[0];
    return await queryInterface.bulkInsert('Products', [
      {
        itemName: 'Deadpool',
        category: 'DVD',
        currentQuantity: 20,
        reorderThreshold: 8,
        sellPrice: 19.99,
        costToGet: 12.50,
        currentlyUsed: true,
        userID: userRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        itemName: 'The Stand by Stephen King',
        category: 'Book',
        currentQuantity: 6,
        reorderThreshold: 2,
        sellPrice: 8.99,
        costToGet: 3.50,
        currentlyUsed: true,
        userID: userRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        itemName: 'All Star by Smashmouth',
        category: 'CD',
        currentQuantity: 2,
        reorderThreshold: 1,
        sellPrice: 4.99,
        costToGet: 1.15,
        currentlyUsed: true,
        userID: userRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        itemName: 'Black Panther',
        category: 'DVD',
        currentQuantity: 12,
        reorderThreshold: 5,
        sellPrice: 17.99,
        costToGet: 12.50,
        currentlyUsed: true,
        userID: userRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        itemName: 'IT by Stephen King',
        category: 'Book',
        currentQuantity: 6,
        reorderThreshold: 2,
        sellPrice: 8.99,
        costToGet: 3.50,
        currentlyUsed: true,
        userID: userRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        itemName: 'Greatest Hits by Rick Astley',
        category: 'CD',
        currentQuantity: 2,
        reorderThreshold: 1,
        sellPrice: 4.99,
        costToGet: 1.15,
        currentlyUsed: true,
        userID: userRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        itemName: 'Thor',
        category: 'DVD',
        currentQuantity: 5,
        reorderThreshold: 8,
        sellPrice: 19.99,
        costToGet: 12.50,
        currentlyUsed: true,
        userID: userRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        itemName: 'Cell by Stephen King',
        category: 'Book',
        currentQuantity: 1,
        reorderThreshold: 3,
        sellPrice: 8.99,
        costToGet: 3.50,
        currentlyUsed: true,
        userID: userRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        itemName: 'iPhone Case',
        category: 'cell phone supplies',
        currentQuantity: 20,
        reorderThreshold: 8,
        sellPrice: 20,
        costToGet: 5,
        currentlyUsed: true,
        userID: userRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        itemName: 'Galaxy Case',
        category: 'cell phone supplies',
        currentQuantity: 12,
        reorderThreshold: 3,
        sellPrice: 10,
        costToGet: 2,
        currentlyUsed: true,
        userID: userRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Products', null, {});
  }
};
