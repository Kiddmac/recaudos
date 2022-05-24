const { Contratos, ContratosSchema } = require ('./contratos');
const { Pagos, PagosSchema} = require ('./pagos');
const { Users, UsersSchema } = require('./users');

function setupModels(sequelize) {
    Contratos.init(ContratosSchema, Contratos.config(sequelize))
    Pagos.init(PagosSchema, Pagos.config(sequelize))
    Users.init(UsersSchema, Users.config(sequelize))

    Users.associate(sequelize.models)
    Pagos.associate(sequelize.models)

}

module.exports = setupModels;