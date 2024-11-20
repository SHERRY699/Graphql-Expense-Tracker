import mongoose from "mongoose";

async function ConnectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected To Database");
  } catch (error) {
    console.log("Error Connecting To Database", error);
  }
}

export default ConnectDb;
