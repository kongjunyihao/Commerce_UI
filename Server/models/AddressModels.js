const mongoose = require('mongoose')

const mailAddressTemplate = new mongoose.Schema({
    buyer_email:{
        type: String,
        required: true
    },
    addresses: [
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
module.exports = mongoose.model('address_infos', mailAddressTemplate)