'use strict';

const { CONTRATOS_TABLE, ContratosSchema } = require('../models/contratos')
const { PAGOS_TABLE, PagosSchema } = require('../models/pagos')
const { USER_TABLE, UsersSchema } = require('../models/users')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CONTRATOS_TABLE, ContratosSchema);
    await queryInterface.createTable(USER_TABLE, UsersSchema);
    await queryInterface.createTable(PAGOS_TABLE, PagosSchema);

  },

  async down (queryInterface) {
    await queryInterface.drop(CONTRATOS_TABLE);
    await queryInterface.drop(USER_TABLE);
    await queryInterface.drop(PAGOS_TABLE);

  }
};
