const mongoose = require('mongoose')

const mailAddressTemplate = new mongoose.Schema({
    buyer_email:{
        type: String,
        required: true
    },
    address: [
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