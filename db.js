import mongoose from "mongoose";

const URI = "mongodb+srv://Parmatma11:<Kr!sh@n12>@project.a2vxlqf.mongodb.net/pg";

const connectDB = async () =>{
    await mongoose.connect(URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("DB Connected...");
}

export default connectDB;