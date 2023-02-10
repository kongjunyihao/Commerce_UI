const mongoose = require('mongoose')

const mylistInfoTemplate = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    mylists:[
        {
            productID:{
                type:String,
                required:true
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
        }
    ]
})

module.exports = mongoose.model('mylist_info', mylistInfoTemplate)