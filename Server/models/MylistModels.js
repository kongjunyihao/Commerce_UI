const mongoose = require('mongoose')

const mylistInfoTemplate = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    mylists:[
        {
            productID:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('mylist_info', mylistInfoTemplate)