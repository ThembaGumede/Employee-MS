import express from "express";
import cors from "cors";
import { AdminRouter } from "./Routes/AdminRoute.js";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"], // frontend address
    methods: ["POST", "GET", "PUT"],
    credentials: true, // allow credentials
  })
);
app.use(express.json()); //convert data to json format we are parsing from the frontend
app.use("/auth", AdminRouter);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
