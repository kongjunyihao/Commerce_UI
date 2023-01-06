const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const path = require('path')
const multer = require('multer')

const signUpTemplateCopy = require('./models/SignUpModels')
const productInfoTemplateCopy = require('./models/ProductModels')
const cartInfoTemplateCopy = require('./models/CartModels')

//Sign Up
router.post('/signup', async (req, res)=>{
    const saltPassword = await bcrypt.genSalt(10)
    const securityPassword = await bcrypt.hash(req.body.password, saltPassword)

    const signUpBuyer = new signUpTemplateCopy({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        password:securityPassword
    })

    const signUpCart = new cartInfoTemplateCopy({
        email: req.body.email,
        products:[]
    })
    signUpCart.save()

    signUpBuyer.save()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})


//Sign In
router.post('/signin', async (req, res)=>{
    try{
        const email = req.body.email
        const password = req.body.password
        console.log(`${email}'s passsword is ${password}`)
        const userdata = await signUpTemplateCopy.findOne({email: email})
        .then(user=>{
            if(user){
                bcrypt.compare(password, user.password, (err, result)=>{
                    // if(err){
                    //     res.json({
                    //         error: err
                    //     })
                    // }
                    if(result){
                        let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                        res.status(200).json({
                            message: 'Login Successful',
                            token
                        })
                    }else{
                        res.status(401).json({
                            message: 'Password does not match'
                        })
                    }
                })
            }else{
                res.status(404).json({
                    message: 'Invalid user'
                })
            }
        })
        console.log(userdata)
        
    }catch(error){
        res.status(404).send("Invalid Email")
    }
})

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
router.get('/products', (async (req,res,next)=>{
    try{
        const result = await productInfoTemplateCopy.find({},{__v: 0})
        res.send(result)
    }catch(error){
        console.log(error.message)
    }
}))

//show product detail
router.get('/products/:id', async (req, res)=>{
    const id = req.params.id
    await productInfoTemplateCopy.findOne({productID:id})
    .then((product)=>{
        res.json(product)
    })
})

//show products with same category
router.get('/products/category/:category', async (req, res)=>{
    const category = req.params.category
    await productInfoTemplateCopy.find({category:category})
    .limit(4)
    .then((product)=>{
        res.json(product)
    })
})

//search
router.post('/search', async (req, res)=>{
    let payload = req.body.payload
    let search = await productInfoTemplateCopy.find({category: payload}).exec()
    //search limit
    search = search.slice(0, 10)
    res.send(search)
})

//cart
router.post('/cart', async (req, res)=>{
    let email = req.body.email
    let result = await cartInfoTemplateCopy.findOne({email: email}).exec()
    res.json(result)
})

//add in cart
router.post('/cart/add', async (req, res)=>{
    let email = req.body.email
    let productID = req.body.productID
    let result = await cartInfoTemplateCopy.findOne({email: email}).exec()
    let targetItem = result.products.find(product => product.productID === productID)
    if(targetItem) targetItem.quantity += 1
    else result.products.push({productID:productID,quantity:1})
    await result.save()
    res.json(result)
})
//minus in cart
router.post('/cart/minus', async (req, res)=>{
    let email = req.body.email
    let productID = req.body.productID
    let result = await cartInfoTemplateCopy.findOne({email: email}).exec()
    let targetItem = result.products.find(product => product.productID === productID)
    if (targetItem.quantity === 1) return
    else targetItem.quantity -= 1
    await result.save()
    res.json(result)
})
//delete in cart
router.post('/cart/delete', async (req, res)=>{
    let email = req.body.email
    let productID = req.body.productID
    let result = await cartInfoTemplateCopy.findOne({email: email}).exec()
    result.products = result.products.filter(product=> product.productID !== productID)
    await result.save()
    res.json(result)
})

//list data:
router.get('/show', (req, res)=>{
    const data = signUpTemplateCopy.find((err, listdata)=>{
        res.json(listdata)
    })
})

module.exports = router