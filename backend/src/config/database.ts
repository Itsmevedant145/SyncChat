import dotenv from 'dotenv';
dotenv.config(); // <- make sure this is at the top

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("MONGO_URI =", process.env.MONGO_URI); // should now print the URI
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI is not defined");
    await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};