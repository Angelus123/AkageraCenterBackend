import validator from "validator";
import mongoose from "mongoose";


    const artSchema = new mongoose.Schema({
    fullName:{
        type: String,
      
        required: false
    },
    
    phone: {
            type: String,
          
            required: false
        },
    email:{
            type: String,
            required: false
        },
    Nationality:{
            type: String,
            required: false
        },
    family: {
            type: String,
            required: false
        },
     pobox : {
            type: String,
        required: false
        },
     citycode: {
            type: String,
            required: false
        },
      street: {
            type: String,
            required: false
        },
    birthday: {
        type: String,
        type: String,
        required: false
    },
    district:{
        type: String,
        type: String,
        required: false
    },
    province: {
        type: String,
        required: false
    },
       
    authorId:{
        type: String,
        required:false
    },
    createdAt:{
        type: String,
        required: false
    },
    genre:{
        type: String,
        required: false
    },
   
})
//let article = module.exports= mo.model('Article',artSchma);
const profile = mongoose.model("Profile", artSchema);
export default profile;