const {string} = require('mathjs')
const mongoose = require('mongoose')


const cartInfoTemplate = new mongoose.Schema({
    email:{
        type: string,
        required: true
    },
    products:[
        {
            productID:{
                type:string,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('cart_info', cartInfoTemplate)