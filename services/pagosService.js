const boom = require("@hapi/boom")
const { models } = require('../libs/sequelize')


class PagosService {

    async create(data){
        const newpago = await models.Pago.create(data)
        return newpago
    }

    async find(query){
        const options = {
            include: ['user'],
            where: {}
        }
        const {limit, offset} = query
        
        if (limit && offset){
            options.limit = limit;
            options.offset = offset;
        }
        const {idRecibo} = query
        if (idRecibo){
            options.where.idRecibo = idRecibo;
        }
        const pagos = await models.Pago.findAll(options)
        if (pagos.length === 0){ 
            throw boom.notFound('Aún no hay pago')
        }
        return pagos;
    }

    async findOne(id){
        const pago = await models.Pago.findByPk(id, {
            include: ['user']
        })
        if (!pago) {
            throw boom.notFound('pago not found')
        }
        return pago;
    }

    async update(id, changes){
        const pago = await models.Pago.findByPk(id)
        if(!pago){
            throw boom.notFound('pago not found')
        }
        const rta = pago.update(changes)
        
        return rta;
    }
    
    async delete(id){
        const pago = await models.Pago.findByPk(id)
        if(!pago){
            throw boom.notFound('pago not found')
        }
        await pago.destroy()
        return {id}
    }
}

module.exports = PagosService;