// logic to connect to database
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://geethakaSankalpa:0753912920@cluster0.mfgzk.mongodb.net/Munch-Out').then(() => console.log("DB connected"));
}