import validator from "validator";
import mongoose from "mongoose";


    const artSchema = new mongoose.Schema({
    title:{
        type: String,
      
        required: false
    },
    
        certificate: {
            type: String,
          
            required: false
        },
        university:{
            type: String,
            required: false
        },
        bachelor:{
            type: String,
            required: false
        },
        master: {
            type: String,
            required: false
        },
        foreignlang : {
            type: String,
        required: false
        },
        germanlang: {
            type: String,
            required: false
        },
        certificatelang: {
            type: String,
            required: false
        },
        internship: {
            type: String,
            type: String,
            required: false
        },
        volunteer:{
            type: String,
            type: String,
            required: false
        },
        experience: {
            type: String,
            required: false
        },
        workingnow : {
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
    author:{
        type: String,
        required: false
    },
})
//let article = module.exports= mo.model('Article',artSchma);
const eligibility = mongoose.model("Eligibility", artSchema);
export default eligibility;