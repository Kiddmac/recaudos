const boom = require("@hapi/boom")
const { models } = require('../libs/sequelize')


class PagosService {

    async create(data){
        const newpago = await models.Pago.create(data)
        return newpago
    }

    async find(){
        const query = await models.Pago.findAll({
            include: ['user']
        })
        if (query.length === 0){ 
            throw boom.notFound('Aún no hay pago')
        }
        return query;
    }

    async findOne(id){
        const pago = await models.pago.findByPk(id)
        if (!pago) {
            throw boom.notFound('pago not found')
        }
        return pago;
    }

    async update(id, changes){
        const pago = await models.pago.findByPk(id)
        if(!pago){
            throw boom.notFound('pago not found')
        }
        const rta = pago.update(changes)
        
        return rta;
    }
    
    async delete(id){
        const pago = await models.pago.findByPk(id)
        if(!pago){
            throw boom.notFound('pago not found')
        }
        await pago.destroy()
        return {id}
    }
}

module.exports = PagosService;