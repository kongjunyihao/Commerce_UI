const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')

const productInfoTemplateCopy = require('./models/ProductModels')


//set up storage position
const Storage = multer.diskStorage({
    destination: function (req, file, callback) {  
        callback(null, './uploads');  
      },  
      filename: function (req, file, callback) {  
        callback(null, file.originalname);  
      }  
    // dest: 'uploads/',
    // filename: (req, file, cb) =>{
    //     // cb(null, file.originalname)
    //     let ext = path.extname(file.originalname)
    //     cb(null, Date.now() + ext)
    // }
})

//Upload image content
const upload = multer({
    storage: Storage
}).single('productImage')

//Upload Product
router.post('/upload', (req, res)=>{
    // res.setHeader("Access-Control-Allow-Origin", "*");
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
                productImage: req.file.path,
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

//show product list
router.get('/products', async (req, res, next)=>{
    try{
        const result = await productInfoTemplateCopy.find({}, {__v: 0})
        res.send(result)
    }catch(error){
        console.log(error.message)
    }
})

//show product detail
router.get('/products/:id', async (req, res)=>{
    try{
        const id = req.params.id
        const result = await productInfoTemplateCopy.findOne({productID: id})
        res.send(result)
    }catch(error){
        console.log(error.message)
    }
})

//get product category
router.get("/categories", async (req, res)=>{
    try{
        const result = await productInfoTemplateCopy.distinct('category')
        res.send(result)
    }catch(error){
        console.log(error.message)
    }
})

//get product in category
router.get('/products/category/:category', async (req, res)=>{
    const category = req.params.category
    await productInfoTemplateCopy.find({category:category})
    .limit(4)
    .then((product)=>{
        res.json(product)
    })
})

//update product
let updateProduct = (req, res)=>{
    upload(req, res, (err)=>{
        if(err){
            console.log(err)
        }else{
            const productInfo = new productInfoTemplateCopy({
                productID: req.params.id,
                productName: req.body.productName,
                productType: req.body.productType,
                productImage: req.file.path,
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
}

router.put('/:id', updateProduct)
router.patch('/:id', updateProduct)

//delete product
router.delete('/:id', async (req, res)=>{
    if(req.params.id === null){
        res.json({
			status: 'error',
			message: 'cart id should be provided',
		})
    }else{
        try{
            const result = await productInfoTemplateCopy.findOne({productID: req.params.id})
            res.send(result)
        }catch(error){
            console.log(error.message)
        }
    }
})

//search bar
router.post('/search', async (req, res)=>{
    let payload = req.body.payload
    let search = await productInfoTemplateCopy.find({category: payload}).exec()
    //search limit
    search = search.slice(0, 10)
    res.send(search)
})


module.exports = router