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
        password:securityPassword,
        location:{}
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
    let user = req.body.user
    let result = await signUpTemplateCopy.findOne({email: email}).exec()
    result.firstName = user.firstName;
    result.lastName = user.lastName;
    result.phone = user.phone;
    result.location = {
        address: user.location.address,
        city: user.location.city,
        state: user.location.state,
        zip: user.location.zip
    }; 
    await result.save();
    res.json(result)
})

//get mailing address info by email
router.get('/address', async (req, res)=>{
    let email = req.body.email
    let result = await signUpTemplateCopy.findOne({email: email}).exec()
    let existAddress = await result.addresses.find().exec()
    if(existAddress) res.send(existAddress)
})

//add mailing address
router.post('/address/add', async (req, res)=>{
    let email = req.body.email
    let fullName = req.body.fullName
    let result = await signUpTemplateCopy.findOne({email: email}).exec()
    const addAddress = new signUpTemplateCopy({
        fullName: req.body.fullName,
        phone: req.body.phone,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    })
    result.addresses.push({addresses: addAddress})
    await result.save()
    res.json(result)
})

//edit mailing address
router.put('/address/edit', async (req, res)=>{
    let email = req.body.email
    let fullName = req.body.fullName
    let result = await signUpTemplateCopy.findOne({email: email}).exec()
    let existAddress = await result.addresses.findOne(address => address.fullName === fullName).exec()
    const addAddress = new signUpTemplateCopy({
        fullName: req.body.fullName,
        phone: req.body.phone,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    })
    result.addresses.push({addresses: addAddress})
    await result.save()
    res.json(result)
})

//remove current address
router.post('/address/remove', async (req, res)=>{
    let email = req.body.email
    let fullName = req.body.fullName
    let result = await signUpTemplateCopy.findOne({email: email}).exec()
    result.addresses = result.addresses.filter(address=>address.fullName !== fullName)
    await result.save()
    res.json(result)
})

module.exports = router