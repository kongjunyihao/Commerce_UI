const express = require('express')
const router = express.Router()

const mylistInfoTemplateCopy = require('./models/MylistModels')

//get mylist by buyer email
router.post('/mylist', async (req, res)=>{
    let email = req.body.email
    let result = await mylistInfoTemplateCopy.findOne({email: email}).exec()
    res.json(result)
})

//set up storage position
const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) =>{
        // cb(null, file.originalname)
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

//Upload image content
const upload = multer({
    storage: Storage
}).single('productImage')

//add items into mylist
router.post('/mylist/add', async (req, res)=>{
    let email = req.body.email
    let productID = req.body.productID
    let result = await mylistInfoTemplateCopy.findOne({email: email}).exec()
    let targetItem = result.mylists.find(product => product.productID === productID)
    if(!targetItem) result.mylists.push({productID})
    await result.save()
    res.json(result)
})

//remove items from mylist
router.post('/mylist/delete', async (req, res)=>{
    let email = req.body.email
    let productID = req.body.productID
    let result = await mylistInfoTemplateCopy.findOne({email: email}).exec()
    result.mylists = result.mylists.filter(product=> product.productID !== productID)
    await result.save()
    res.json(result)
})