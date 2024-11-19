import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-commerce");
};

connectDB()
  .then(() => console.log("Connection Successfully..."))
  .catch(() => console.log("Connection Error!"));

export default connectDB;
