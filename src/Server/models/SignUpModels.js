const {string} = require('mathjs')
const express = require('express')
const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    firstName:{
        type: string,
        required: true
    },
    lastName:{
        type: string,
        required: true
    },
    email:{
        type: string,
        required: true
    },
    phone:{
        type: string,
        required: true
    },
    password:{
        type: string,
        required: true
    },
    address:{
        type: string,
        required: false
    },
    city:{
        type: string,
        required: false
    },
    state:{
        type: string,
        required: false
    },
    zip:{
        type: string,
        required: false
    }
})


module.exports = mongoose.model('buyer_info', signUpTemplate)