const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')

class ContratosService {

    async create(data){
        const newContrato = await models.Contrato.create(data)
        return newContrato
    }

    async find(query){
        const options = {
            include: ['user'],
            where: {}
        }
        const { limit, offset } = query
        if (limit && offset){
            options.limit = limit;
            options.offset = offset;
        }
        const {cedula} = query;
        if(cedula){
            options.where.cedula = cedula
        }

        const contrato = await models.Contrato.findAll(options)
        if (contrato.length === 0){ 
            throw boom.notFound('Aún no hay contratos')
        }
        return contrato;
    }

    async findOne(id){
        const contrato = await models.Contrato.findByPk(id, {
            include: 'user'
        })
        if (!contrato) {
            throw boom.notFound('contrato not found')
        }
        return contrato;
    }

    async update(id, changes){
        const contrato = await models.Contrato.findByPk(id)
        if(!contrato){
            throw boom.notFound('contrato not found')
        }
        const rta = contrato.update(changes)
        
        return rta;
    }
    
    async delete(id){
        const contrato = await models.Contrato.findByPk(id)
        if(!contrato){
            throw boom.notFound('contrato not found')
        }
        await contrato.destroy()
        return {id}
    }
}

module.exports = ContratosService;