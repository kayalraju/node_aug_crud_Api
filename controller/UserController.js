const User=require('../model/User');


const store= async(req,res)=>{
    if(!req.body.name && !req.body.email && !req.body.phone && !req.body.city){
        res.status(400).send({msg:"all filed is required"})
    }
  const addUser=  new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        city:req.body.city,
    });
   await addUser.save().then(data=>{
    res.status(200).send({status:"success",msg:"data added successfully",user:data})
   }).catch(err=>{
    res.status(400).send({msg:"all filed is required"})
   })
}
const alluser=async(req,res)=>{

    try{
       const dataall= await User.find()
       res.status(200).send({status:"success",user:dataall})

    }catch(error){
        res.status(400).send({msg:error.message})
    }
}

const edituser= async(req,res)=>{
    try{
        const editOne=await User.findById(req.params.id);

        res.status(200).send({status:"success",data:editOne});
    
        }catch(error){
            res.status(400).send({msg:error.messgae});
        }

}
const updateuser=async(req,res)=>{
    if(!req.body){
        res.status(400).send({msg:"data not found..."});
    }
    const id=req.params.id;

   await User.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(data=>{
    if(!data){
        res.status(400).send({msg:"user not found..."});
    }else{
        res.status(200).send({msg:"user update successfully..."}); 
    }
   }).catch(err=>{
    res.status(400).send({msg:err.messgae});
   })
}

const deleteuser=async(req,res)=>{
   const deletedata= await User.findByIdAndRemove(req.params.id).then(data=>{
        if(!data){
            res.status(400).send({msg:"user not delete..."});
        }else{
            res.status(200).send({msg:"user delete successfully..."}); 
        }
    })
}


module.exports=({
    store,
    alluser,
    edituser,
    updateuser,
    deleteuser
})