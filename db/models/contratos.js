const {Model, DataTypes} = require ('sequelize');

const CONTRATOS_TABLE = 'contratos';

const ContratosSchema = {
    id: {
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombreContratista: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre_contratista'
    },
    apto: {
        allowNull: false,
        type: DataTypes.STRING
    },
    fechaCorte: {
        allowNull: false, 
        type: DataTypes.INTEGER,
        field: 'fecha_corte'
    },
    valorContrato: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'valor_contrato'
    },
    deposito: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    valorLetras: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'valorLetras'
    },
    cedula: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    fechaContrato: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'fechaontrato',

    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at'
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Contratos extends Model {
    static associate(models) {
        this.belongsTo(models.users, {as: 'contrato'})
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: CONTRATOS_TABLE,
            modelName: 'Contratos',
            timestamps: false
        }
    }
}

module.exports = {CONTRATOS_TABLE, ContratosSchema, Contratos}
