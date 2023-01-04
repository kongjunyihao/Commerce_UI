const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const path = require('path')
const multer = require('multer')

const productInfoTemplateCopy = require('./models/ProductModels')


//Storage
const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) =>{
        // cb(null, file.originalname)
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    },
})

//Upload image
const upload = multer({
    storage: Storage
}).single('productImage')

//Upload Product
router.post('/upload', (req, res)=>{
    upload(req, res, (err)=>{
        if(err){
            console.log(err)
        }else{
            const productInfo = new productInfoTemplateCopy({
                productID: req.body.productID,
                productName: req.body.productName,
                productType: req.body.productType,
                // productImage: {
                //     data: req.file.filename,
                //     contentType: "image/png",
                // },
                productImge: req.file.path,
                price: req.body.price,
                category: req.body.category,
                rating: req.body.rating,
                view: req.body.view,
                description: req.body.description
            })
            productInfo.save()
            .then(data=>{
                res.status(200).json(data)
                console.log('successfully upload')
            })
            .catch(error=>{
                res.json(error)
                console.log(err)
            })
        }
    })
})

//show product detail
router.get('/products/:id', async (req, res)=>{
    const id = req.params.id
    await productInfoTemplateCopy.findOne({id,})
    .select(['-_id'])
    .then((product)=>{
        res.json(product)
    })
})

//search
router.post('/search', async (req, res)=>{
    let payload = req.body.payload.trim()
    let search = await productInfoTemplateCopy.find({name: {$regex: new RegExp('^'+payload+'.*','i')}}).exec()
    //search limit
    search = search.slice(0, 10)
    res.send({payload: search})
})

//list data:
router.get('/show', (req, res)=>{
    const data = signUpTemplateCopy.find((err, listdata)=>{
        res.json(listdata)
    })
})

module.exports = router