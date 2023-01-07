const mongoose = require('mongoose')

const mailAddressTemplate = new mongoose.Schema({
    buyer_email:{
        type: String,
        required: true
    },
    address: [
        {
            country: String,
            fullName: String,
            phone: String,
            street: String,
            Apt: String,
            city: String,
            state: String,
            zip: Number
        }
    ]
})