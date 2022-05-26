const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')

class ContratosService {

    async create(data){
        const newContrato = await models.Contrato.create(data)
        return newContrato
    }

    async find(){
        const query = await models.Contrato.findAll({
            include: ['users']
        })
        if (query.length === 0){ 
            throw boom.notFound('Aún no hay contratos')
        }
        return query;
    }

    async findOne(id){
        const contrato = await models.contratos.findByPk(id)
        if (!contrato) {
            throw boom.notFound('contrato not found')
        }
        return contrato;
    }

    async update(id, changes){
        const contrato = await models.contratos.findByPk(id)
        if(!contrato){
            throw boom.notFound('contrato not found')
        }
        const rta = contrato.update(changes)
        
        return rta;
    }
    
    async delete(id){
        const contrato = await models.contratos.findByPk(id)
        if(!contrato){
            throw boom.notFound('contrato not found')
        }
        await contrato.destroy()
        return {id}
    }
}

module.exports = ContratosService;