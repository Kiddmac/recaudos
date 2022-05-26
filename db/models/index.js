const { Contratos, ContratosSchema } = require ('./contratoModel');
const { Pagos, PagosSchema} = require ('./pagoModel');
const { Users, UsersSchema } = require('./userModel');

function setupModels(sequelize) {
    Users.init(UsersSchema, Users.config(sequelize))
    Contratos.init(ContratosSchema, Contratos.config(sequelize))
    Pagos.init(PagosSchema, Pagos.config(sequelize))

    Users.associate(sequelize.models)
    Pagos.associate(sequelize.models)
    Contratos.associate(sequelize.models)

}

module.exports = setupModels;