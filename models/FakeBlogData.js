import mongoose from "mongoose";

const FakeBlogDataSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
        trim:true
    },
    title:{
        type:String,
        required:true 
    },
    category:{
        type:String,
        required:true 
    },
    author:{
        type:String,
        required:true 
    },
    published_date:{
        type:String,
        required:true 
    },
    summary:{
        type:String,
        required:true 
    }
})

const FakeBlogData = mongoose.models.fakeblogdata || mongoose.model("fakeblogdata",FakeBlogDataSchema);

export default FakeBlogData;