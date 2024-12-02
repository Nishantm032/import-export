import mongoose from "mongoose";

export const connectDb = async () =>{
    await mongoose.connect('mongodb+srv://NishantMishra:8000686114Na@clusterimpexp.4d5qn.mongodb.net/?')
    .then(()=>console.log("DB is Connected"));
}