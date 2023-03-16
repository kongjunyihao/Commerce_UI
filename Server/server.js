/*
    server.js used to connect to the mongodb and create root uri
    router-app.js used to create sub uri and use method: get, post, delete, and put
    models used create schema of data tables
    install packages:
        node, express, express mongodb, jsonwebtoken, multer
        all use npm install
*/

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const routerBuyer = require('./router-buyer')
const routerProduct = require('./router-product')
const routerCart = require('./router-cart')
const routerMylist = require('./router-mylist')
// const draftURI = require('./modules/uploadDraft/DraftRouter')



//MongoDB connection personal URI

//Sean
const uri = "mongodb+srv://Sean_cluster:Xtx199284=@e-commerce.xyeoe40.mongodb.net/?retryWrites=true&w=majority"

//Daniel
// const uri = "mongodb+srv://YanyuLi:lyy123456@cluster0.vf6ovwt.mongodb.net/?retryWrites=true&w=majority"

async function connect(){
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(uri)
        console.log('Connected to MongoDB')
    } catch(error){
        console.error(error)
    }
}

connect()

//express middleware
app.use(cors())
app.use(express.json())
// app.use('/app', routerURI)
app.use('/app', routerProduct)
app.use('/app', routerBuyer)
app.use('/app', routerCart)
app.use('/app', routerMylist)
app.use('uploads', express.static('uploads'))
// app.use('/app', draftURI)

//listener
app.listen(80, ()=>{
    console.log('Server started on port 80')
})