import mongoose from "mongoose";

const BookCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    description:{
        type:String
    }
},
{
    timestamps:true
})

export default mongoose.model("BookCategory",BookCategorySchema)