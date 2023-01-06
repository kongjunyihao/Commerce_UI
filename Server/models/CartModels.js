const express = require('express')
const mongoose = require('mongoose')
const product = require('./ProductModels')
const buyer = require('./SignUpModels')

const cartInfoTemplate = new mongoose.Schema({
    buyer_email:{
        type: String,
        ref: buyer,
        required: true
    },
    date:{
        type:Date,
        // required:true
    },
   product:[
        {
            productID:{
                type: String,
                ref:product,
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