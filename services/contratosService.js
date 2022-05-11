const boom = require('@hapi/boom');
const { redirect } = require('express/lib/response');

class ContratosService {

    constructor(){
        this.contratos = [{
            id: '1',
            nombreContratista: 'Ronald',
            fechaDeCorte: '8',
            apto: '204',
            deposito: '200.000',
            fechaContrato: '30-05-2022'
        },{
            id: "2",
            nombreContratista: 'Ronald',
            fechaDeCorte: '8',
            apto: '204',
            deposito: '200.000',
            fechaContrato: '30-05-2022'
        },{
            id: '3',
            nombreContratista: 'Ronald',
            fechaDeCorte: '8',
            apto: '204',
            deposito: '200.000',
            fechaContrato: '30-05-2022'
        },]
    }

    async create(data){
              const newContrato = {
                ...data
            }
            this.contratos.push(newContrato);
            return newContrato            
    }

    async find(){
        const contrato = this.contratos
        if (contrato.length === 0){ 
            throw boom.notFound('Aún no hay contratos')
        }
        return contrato
    }

    async findOne(id){
        const contrato =  this.contratos.find(item => item.id === id)
        if (!contrato) {
            throw boom.notFound('contrato not found')
        }
        return contrato;
    }

    async update(id, changes){
        const index = this.contratos.findIndex(item => item.id === id)
        if(index === -1){
            throw boom.notFound('contrato not found')
        }
        const contrato = this.contratos[index]
        this.contratos[index] = {
            ...contrato,
            ...changes
        }
        return contrato;
    }
    
    async delete(id){
        const index = this.contratos.findIndex(item => item.id === id)
        if(index === -1){
            throw boom.notFound('contrato not found')
        }
        this.contratos.splice(index, 1);
        return { id }
    }
}

module.exports = ContratosService;