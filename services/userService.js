const boom = require("@hapi/boom")
const res = require("express/lib/response")

const {models} = require ('../libs/sequelize')

class UsersService {

    async create(data){
        const newUser = await models.users.create(data)
        return newUser
    }

    async find(){
        const query = await models.users.findAll()
        if (query.length === 0){ 
            throw boom.notFound('Aún no hay usuarios')
        }
        return query;
    }

    async findOne(id){
        const user = await models.users.findByPk(id)
        if (!user) {
            throw boom.notFound('user not found')
        }
        return user
    }

    async update(id, changes){
        const user = await models.users.findByPk(id)
        if(!user){
            throw boom.notFound('user not found')
        }
        const rta = user.update(changes)
        
        return rta
    }
    
    async delete(id){
        const user = await models.users.findByPk(id)
        if(!user){
            throw boom.notFound('user not found')
        }
        await user.destroy()
        return {id}
    }
}

module.exports = UsersService;