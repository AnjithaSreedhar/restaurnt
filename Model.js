const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://shahinsha1273:Shahin@123@cluster0.wugd3hw.mongodb.net/Program?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
   
})
.catch(err=>console.log(err))


let mongoschema = mongoose.Schema


const Login = new mongoschema({
  username: String,
  email: String,
  password: String,
  // location: String,
  // address: String,
})


var login = mongoose.model("login",login)
module.exports = login