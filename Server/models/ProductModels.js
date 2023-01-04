const {string} = require('mathjs')
const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')


const productInfoTemplate = new mongoose.Schema({
    productID:{
        type: string,
        required: true
    },
    productName:{
        type: string,
        required: true
    },
    productType:{
        type: string,
        required: true
    },
    productImage:{
        // data: Buffer,
        // contentType: string
        type: String
    },
    price:{
        type: string,
        required: true
    },
    category:{
        type: string,
        required: true
    },
    rating:{
        type: string,
        required: true
    },
    view:{
        type: string,
        required: true
    },
    description:{
        type: string,
        required: true
    },
})

module.exports = mongoose.model('product_info', productInfoTemplate)