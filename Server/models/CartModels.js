const {string} = require('mathjs')
const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')

const cartInfoTemplate = new mongoose.Schema({
    
})

module.exports = mongoose.model('cart_info', cartInfoTemplate)