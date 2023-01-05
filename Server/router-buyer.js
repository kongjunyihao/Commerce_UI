const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const path = require('path')
const multer = require('multer')

const signUpTemplateCopy = require('./models/SignUpModels')

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
                    if(err){
                        res.json({
                            error: err
                        })
                    }
                    if(result){
                        let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                        res.status(200).json({
                            message: 'Login Successful',
                            token
                        })
                    }else{
                        res.status(400).json({
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

//profile

module.exports = router