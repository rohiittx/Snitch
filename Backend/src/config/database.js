import mongoose from "mongoose";
import { config } from "./config.js";

export async function connectDB() {
    try {
        await mongoose.connect(config.MONGODB_URI);

        console.log("Connected to DB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}