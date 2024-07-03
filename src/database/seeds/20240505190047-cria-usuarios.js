const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const people = [];
    for (let i = 1; i <= 100; i++) { // Ajuste o número máximo de objetos aqui
      people.push({
        nome: `Fred ${i}`,
        email: `fred${i}@gmail.com`,
        password_hash: await bcryptjs.hash('1234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    await queryInterface.bulkInsert(
      'users',
      people,
      {},
    );
  },

};
