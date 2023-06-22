import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRouter);

mongoose
  .connect("mongodb://localhost:27017/memorius_project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Runing on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));
