import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import moviesModel from "./models/moviesModel.js";
import moviesRouter from "./routes/moviesRouter.js";


//Expres boiler plate
const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`App is now listening on port' ${process.env.PORT}.`)
});

//Mongo Boilerplate
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.once("open", ()=> {
    console.log("Databse is connected")
})

//Routes
app.use(moviesRouter);

