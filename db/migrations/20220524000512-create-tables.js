'use strict';

const { CONTRATOS_TABLE, ContratosSchema } = require('../models/contratos')
const { PAGOS_TABLE, PagosSchema } = require('../models/pagos')
const { USER_TABLE, UsersSchema } = require('../models/users')

module.exports = {
  async up (queryInterface) {
    queryInterface.createTable(CONTRATOS_TABLE, ContratosSchema);
    queryInterface.createTable(USER_TABLE, UsersSchema);
    queryInterface.createTable(PAGOS_TABLE, PagosSchema);

  },

  async down (queryInterface) {
    queryInterface.drop(CONTRATOS_TABLE);
    queryInterface.drop(USER_TABLE);
    queryInterface.drop(PAGOS_TABLE);

  }
};
