const mongoose= require('mongoose')
const VolunteerSchema= new mongoose.Schema({
    name: String,
    email: String,
    password:String

})

const VolunteerModel= mongoose.model("Volunteers", VolunteerSchema)
module.exports= VolunteerModel