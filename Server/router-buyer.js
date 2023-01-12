const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signUpTemplateCopy = require('./models/SignUpModels')
const addressTemplateCopy = require('./models/AddressModels')
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
        products:[],
        history:[]
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

//get buyer info by email for profile
router.post('/profile', async (req, res)=>{
    let email = req.body.email
    let result = await signUpTemplateCopy.findOne({email: email}).exec()
    res.json(result)
})

//update profile
router.put('/profile/update', async (req, res)=>{
    let email = req.body.email
    let result = await signUpTemplateCopy.findOne({email: email}).exec()
    res.json(result)
})

//get mail address info by email
router.post('/address', async (req, res)=>{
    let email = req.body.email
    let result = await addressTemplateCopy.findOne({email: email}).exec()
    res.json(result)
})

//add mailing address
router.post('/address/add', async (req, res)=>{
    let email = req.body.email
    let result = await addressTemplateCopy.findOne({email: email}).exec()
    let targetItem = result.products.find(product => product.productID === productID)
    if(targetItem) targetItem.quantity += 1
    else result.products.push({productID:productID,quantity:1})
    await result.save()
    res.json(result)
})

module.exports = router