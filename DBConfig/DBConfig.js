import mongoose from "mongoose";

const DBConfig = async()=>{
    try {
        await mongoose.connect(process.env.MongoDB_URI);
        console.log("Database Connected")
    } catch (error) {
        console.log("database not connected :",error)
    }
}
export default DBConfig;