const {Model, DataTypes, Sequelize} = require ('sequelize');

const PAGOS_TABLE = 'pagos';

const PagosSchema = {
    id: {
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombreContratista: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
        field: 'nombre_contratista'
    },
    apto: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'apto'
    },
    fechaCorte: {
        allowNull: false, 
        type: DataTypes.INTEGER,
        field:'fecha_corte'
    },
    valorPago: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'valor_contrato'
    },
    valorLetras: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'valor_letras'
    },
    saldoPendiente: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'saldo_pendiente'
    },
    fechaPago:{
        allowNull: false,
        field: 'fecha_pago',
        type: DataTypes.STRING,
        defaultValue: Sequelize.NOW(),
    },

    idRecibo:{
        allowNull: false,
        type: DataTypes.STRING
    },
    pagoDesde: {
        allowNull: false,
        type: DataTypes.STRING
    },
    pagoHasta:{
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at'
    }
}

class Pagos extends Model {
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PAGOS_TABLE,
            modelName: 'pagos',
            timestamps: false
        }
    }
}

module.exports = {PAGOS_TABLE, PagosSchema, Pagos}