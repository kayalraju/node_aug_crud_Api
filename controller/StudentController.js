const Student=require('../model/Student');

const store=async(req,res)=>{
    if(!req.body.name && !req.body.email && !req.body.phone && !req.body.city && !req.body.address && !req.body.class){
        res.status(400).send({msg:"fill up all the input filed..."});
    }
    const addStudent=new Student({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        city:req.body.city,
        address:req.body.address,
        class:req.body.class,
    });
   await addStudent.save().then(data=>{
        res.status(200).send({success:true,msg:"data added successfully",student:data})
    }).catch(err=>{
        res.status(500).send({
            msg:err.message || "Some error occured."
        })
    })

}

const allstudent=async(req,res)=>{
    try{
        const studentData= await Student.find()
        res.status(200).send({msg:"all data ",data:studentData});
    }catch(error){
        res.status(400).send({msg:error.messgae});
    }
}
const edit=async(req,res)=>{
    try{
    const editOne=await Student.findById(req.params.id);
    res.status(200).send({status:"success",data:editOne});

    }catch(error){
        res.status(400).send({msg:error.messgae});
    }
}
const update=async(req,res)=>{
    if(!req.body){
        res.status(400).send({msg:"data not found..."});
    }
    const id=req.params.id;
   await Student.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(data=>{
    if(!data){
        res.status(400).send({msg:"student not found..."});
    }else{
        res.status(200).send({msg:"student update successfully..."}); 
    }
   }).catch(err=>{
    res.status(400).send({msg:err.messgae});
   })
}

const destroy=async(req,res)=>{
   await Student.findByIdAndRemove(req.params.id).then(data=>{
        if(!data){
            res.status(400).send({msg:"delete failed"});
        }else{
            res.status(200).send({msg:"delete successfully...."});
        }
    })
}

module.exports=({
    store,
    allstudent,
    edit,
    update,
    destroy
})