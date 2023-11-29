import express from "express";
import dbConnection from "./database/database";
import cors from "cors";
import router from "./routes/employeeRoutes";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
dbConnection();

app.use("/employee", router);

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}.`);
});
