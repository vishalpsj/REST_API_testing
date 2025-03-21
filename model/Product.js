const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    price: {
        type: Number, required: true
    },
    featured: {
        type: Boolean, required: true, default: false
    },
    createdAt: {
        type: Date, required: true, default: Date.now()
    },
    company: {
        type: String, required: true
    },
})

module.exports = new mongoose.model("Product", productSchema)