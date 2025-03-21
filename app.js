require("dotenv").config()

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const getAllProducts = require("./apiCalling/getAllProducts")
const connectDb = require("./db/connectDb")

app.use("/", getAllProducts)

const start = async () => {
    try {
        connectDb(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is live on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()