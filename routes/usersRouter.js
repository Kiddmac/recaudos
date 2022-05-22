const express = require('express');
const UserService = require ('../services/userService')
const { createUserSchema, getUserSchema, updateUserSchema, deleteUserSchema } = require('../schemas/userSchema')
const validatorHandler = require('../middlewares/validatorHandler')

const router = express.Router();
const service = new UserService;


router.get('/', async (req,res,next)=>{
    try {
        const users = await service.find()
        res.json(users)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',
validatorHandler(getUserSchema, 'id'),
async (req,res,next)=> {
    try {
        const {id} = req.params
        const user = await service.findOne(id);
        res.json(user)
    } catch (error) {
        next(error)
    }
})

router.post('/',
validatorHandler(createUserSchema, 'body'),
async (req,res,next)=> {
    try {
        const body = req.body;
        const user = await service.create(body)
        res.json(user)
    } catch (error) {
        next(error)
    }
})

router.patch('/:id',
validatorHandler(updateUserSchema, 'id'),
async (req,res,next)=> {
    try {
        const {id} = req.params;
        const changes = req.body;
        const user = await service.update(id, changes);
        res.json(user)

    } catch (error) {
        next(error)
    }
})

router.delete('/:id',
validatorHandler(deleteUserSchema, 'id'),
async (req,res,next)=> {
    try {
        const {id} = req.params;
        const user = await service.delete(id);
        res.json(user)
    } catch (error) {
        next(error)
    }
})

module.exports = router;
