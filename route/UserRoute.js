const express=require('express');

const UserRoute=express()
const bodyParser=require('body-parser');
UserRoute.use(bodyParser.json());
UserRoute.use(bodyParser.urlencoded({extended:true}));

const UserController=require('../controller/UserController')

UserRoute.post('/user',UserController.store);
UserRoute.get('/user/all',UserController.alluser);
UserRoute.get('/edituser/:id',UserController.edituser);
UserRoute.patch('/updateuser/:id',UserController.updateuser);
UserRoute.delete('/deleteuser/:id',UserController.deleteuser);

module.exports=UserRoute;
