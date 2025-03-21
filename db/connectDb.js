require("dotenv").config()


const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        console.log("Connected to database.");
        return await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(error);
    }
}


module.exports = connectDb;