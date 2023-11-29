import mongoose from "mongoose";

const DB_URI = "mongodb://127.0.0.1:27017/timesheet";

const dbConnection = () => {
  mongoose
    .connect(DB_URI)
    .then((conn) => {
      console.log("DB connected.");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default dbConnection;
