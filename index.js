import express from "express";
import connectTomongo from "./config/db.js";
import authRoute from "./routes/blog.js";
import cors from "cors";
import dotenv from 'dotenv'


dotenv.config({
  path:'./.env'
});

const app = express();

connectTomongo();

app.use(cors());

app.use(express.json());

app.use(express.static("public/upload"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.use("/api/v1", authRoute);


app.listen(process.env.PORT || 7000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
