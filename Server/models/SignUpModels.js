const express = require('express')
const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    addresses:[
        {
            fullName: String,
            phone: String,
            street: String,
            city: String,
            state: String,
            zip: Number
        }
    ]
})


module.exports = mongoose.model('buyer_info', signUpTemplate)