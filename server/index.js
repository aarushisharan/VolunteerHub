const express =require("express")
const mongoose= require("mongoose")
const cors= require("cors")
const VolunteerModel =require('./models/volunteer')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/VolunteerHub");

app.post("/login",(req,res)=>{
    const {email, password}=req.body;
    VolunteerModel.findOne({email:email})
    .then(user=>{
        if(user)
        {
            if(user.password==password)
            {
                res.json("Success")
            }
            else
            {
                res.json("The password is incorrect")
            }
        }
        else
        {
            res.json("No record exists")
        }
    })
})

app.post('/register',(req,res)=>{
    VolunteerModel.create(req.body)
    .then(volunteers=> res.json(volunteers))
    .catch(err=> res.json(err))


})

app.listen(3001, ()=>{
    console.log("server is running")
})