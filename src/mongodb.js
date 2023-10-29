const mongoose =require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/VolunteerHub")
.then(()=>{
    console.log("mongodb connected");
})
.catch((error)=>{
    console.log("Failed to connect",error);
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})

const collection = new mongoose.model("LoginIncollection", LoginSchema)
module.exports= collection