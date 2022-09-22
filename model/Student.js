const mongoose=require('mongoose');

const Student=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("Student",Student);