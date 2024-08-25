import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MOngoDB url is missing");

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devqubesdb",
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("Error in connecting MongoDB -> ", error);
  }
};
