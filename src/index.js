require('dotenv').config({path: './env'})
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import connectDB from "./db/index"


connectDB()
.then( ()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is listening on port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO DB connection failed !!! ", err)
})



/*
import express from "express";
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MOMGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error
        })
        app.listen(process.env.PORT , () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch (error){
        console.error("ERROR : ", error)
        throw error
    }
})()
*/