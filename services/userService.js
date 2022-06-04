const boom = require("@hapi/boom")
const bcrypt = require ('bcrypt')

const {models} = require ('../libs/sequelize')

class UsersService {

    async create(data){
        const hash = await bcrypt.hash(data.password, 10)
        const newUser = await models.User.create({
            ...data,
            password: hash})
        delete newUser.dataValues.password;
        return newUser
    }

    async find(){
        const query = await models.User.findAll({
            include: ['pagos', 'contratos']
        })
        if (query.length === 0){ 
            throw boom.notFound('Aún no hay usuarios')
        }
        return query;
    }

    async findOne(id){
        const user = await models.User.findByPk(id, {
            include: ['pagos', 'contratos']
        })
        if (!user) {
            throw boom.notFound('user not found')
        }
        return user
    }

    async findbyEmail(email){
        const user = await models.User.findOne({
            where: { email }
        })
        if (!user) {
            throw boom.notFound('user not found')
        }
        return user
    }

    async update(id, changes){
        const user = await models.User.findByPk(id)
        if(!user){
            throw boom.notFound('user not found')
        }
        const rta = user.update(changes)
        
        return rta
    }
    
    async delete(id){
        const user = await models.User.findByPk(id)
        if(!user){
            throw boom.notFound('user not found')
        }
        await user.destroy()
        return {id}
    }
}

module.exports = UsersService;