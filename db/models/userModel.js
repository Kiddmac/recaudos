const {Model, DataTypes} = require ('sequelize');

const USER_TABLE = 'users';

const UsersSchema = {
    id: {
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    firtsName: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: false,
        field: 'firts_name'
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name'
    },
    email: {
        allowNull: false, 
        type: DataTypes.STRING,
        field:'email',
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'password'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at'
    },
}

class Users extends Model {
    static associate(models) {
        this.hasMany(models.Pago, {
            foreignKey: 'userIdPago',
            as: 'pagos'
        });
        this.hasMany(models.Contrato, {
            foreignKey: 'userIdContrato',
            as: 'contratos'})
    }  
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = {USER_TABLE, UsersSchema, Users}