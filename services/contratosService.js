class ContratosService {

    constructor(){
        this.contratistas = [{
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

    create(){

    }
    find(){
        return this.contratistas

    }
    findOne(id){
    return this.contratistas.find(item => item.id === id)
    }
    update(){

    }
    delete(){

    }
}

module.exports = ContratosService;