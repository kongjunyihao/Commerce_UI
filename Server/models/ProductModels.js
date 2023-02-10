const mongoose = require('mongoose')


const productInfoTemplate = new mongoose.Schema({
    productID:{
        type: String,
        required: true
    },
    productName:{
        type: String,
        required: true
    },
    productType:{
        type: String,
        required: true
    },
    productImage:{
        // data: Buffer,
        // contentType: string
        type: String
    },
    price:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        required: true
    },
    view:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('product_info', productInfoTemplate)