const Product = require("../model/Product")

const getAllProducts = async (req, res) => {
    try {
        const {company, name} = req.query;
        const queryObject = {};

        if(company){
            queryObject.company = {$regex: company, $options: "i"}
        }
        if(name){
            queryObject.name = {$regex: name, $options: "i"}
        }

        const myProducts = await Product.find(queryObject)
        res.status(200).json({success: true, data: myProducts})
    } catch (error) {
        res.status(500).json({success: false, msg: "server error"})
    }
}

module.exports = getAllProducts;