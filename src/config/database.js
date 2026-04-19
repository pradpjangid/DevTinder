import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("Database cannot be connected !!", error);
    process.exit(1);
  }
};

export default connectDB;