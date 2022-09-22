const express=require('express');
const Student_Route=express();
const bodyParser=require('body-parser');

Student_Route.use(bodyParser.json());
Student_Route.use(bodyParser.urlencoded({extended:true}));

const StudentController=require('../controller/StudentController')

Student_Route.post('/student',StudentController.store);
Student_Route.get('/student/all',StudentController.allstudent);
Student_Route.get('/edit/:id',StudentController.edit);
Student_Route.patch('/update/:id',StudentController.update);
Student_Route.delete('/delete/:id',StudentController.destroy);


module.exports=Student_Route;