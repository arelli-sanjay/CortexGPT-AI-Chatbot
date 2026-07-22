import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/Chat.js";


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);


app.listen(PORT,()=>{
  console.log(`server running ${PORT}`);
  connectDB();
});

const connectDB = async() =>{
  try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected");
  }catch(err){
    console.log("not connected",err);
  }
}
