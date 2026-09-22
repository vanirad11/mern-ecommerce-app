import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    console.log("MONGO_URL exists:", !!process.env.MONGO_URL);

    const conn = await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log(
      `Connected To MongoDB Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
