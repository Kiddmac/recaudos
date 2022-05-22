const boom = require("@hapi/boom")
const { models } = require('../libs/sequelize')

class PagosService {

    async create(data){
        const newpago = await models.pagos.create(data)
        return newpago
    }

    async find(){
        const query = await models.pagos.findAll()
        if (query.length === 0){ 
            throw boom.notFound('Aún no hay pagos')
        }
        return query;
    }

    async findOne(id){
        const pago = await models.pagos.findByPk(id)
        if (!pago) {
            throw boom.notFound('pago not found')
        }
        return pago;
    }

    async update(id, changes){
        const pago = await models.pagos.findByPk(id)
        if(!pago){
            throw boom.notFound('pago not found')
        }
        const rta = pago.update(changes)
        
        return rta;
    }
    
    async delete(id){
        const pago = await models.pagos.findByPk(id)
        if(!pago){
            throw boom.notFound('pago not found')
        }
        await pago.destroy()
        return {id}
    }
}

module.exports = PagosService;