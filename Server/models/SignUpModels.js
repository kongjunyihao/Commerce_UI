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
    address:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: false
    },
    state:{
        type: String,
        required: false
    },
    zip:{
        type: String,
        required: false
    }
})


module.exports = mongoose.model('buyer_info', signUpTemplate)