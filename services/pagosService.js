const boom = require("@hapi/boom")

class PagosService {

    constructor(){
        this.pagos = [{
            id: '1',
            nombreContratista: 'Ronald2',
            fechaDeCorte: '8',
            valorPago: '400.000',
            apto: '204',
            valorLetras: 'Cuatrocientos mil pesos',
            mesPagoDesde: 'mayo',
            mesPagoHasta: 'junio',
            fechaPago: '30-05-2022'
        },
        {
            id: '2',
            nombreContratista: 'Ronald3',
            fechaDeCorte: '8',
            valorPago: '400.000',
            apto: '204',
            valorLetras: 'Cuatrocientos mil pesos',
            mesPagoDesde: 'mayo',
            mesPagoHasta: 'junio',
            fechaPago: '30-05-2022'
        },
        {
            id: '3',
            nombreContratista: 'Ronald4',
            fechaDeCorte: '8',
            valorPago: '400.000',
            apto: '204',
            valorLetras: 'Cuatrocientos mil pesos',
            mesPagoDesde: 'mayo',
            mesPagoHasta: 'junio',
            fechaPago: '30-05-2022'
        },]
    }

    async create(data){
        const newPago = {
            ...data
        }
        this.pagos.push(newPago)
        return newPago
    }

    async find(){
        const contratos=  this.pagos
        if(contratos.length === 0) {
            throw boom.notFound('Aún no hay pagos')
        }
        return contratos
    }

    async findOne(id){
        const pago =  this.pagos.find(item => item.id === id)
        if(!pago) {
            throw boom.notFound('No hay un pago con ese ID')
        }
    }

    async update(id, changes){
        const index = this.pagos.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('No hay un pago con ese ID')
        }

        const pago = this.pagos[index]
        this.pagos[index] = {
            ...pago,
            ...changes
        }
        return this.pagos[index]
    }
    async delete(id){
        const index = this.pagos.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('No hay un pago con ese ID')
        }
        this.pagos.splice(index, 1)
        return { id }
    }
}

module.exports = PagosService;