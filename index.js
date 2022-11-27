import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import aboutRouter from "./routes/about.js";
import projectRouter from './routes/project.js'
import contactRouter from './routes/contact.js'

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));

app.use("/about", aboutRouter);
app.use("/project",projectRouter);
app.use("/contact", contactRouter);


app.use(express.static(path.join(__dirname,"./client")));
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"./client/build","index.html"))

})
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT || 3003, () => {
      console.log(
        "App connected to mongo and running on port " + process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));
