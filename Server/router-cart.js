const express = require('express')
const router = express.Router()

const cartTemplateCopy = require('./models/CartModels')

//get cart by buyer email
router.get('/buyer/buyeremail', (req, res)=>{
    const email = req.params.email;
    const startDate = req.query.startdate || new Date('1970-1-1');
	const endDate = req.query.enddate || new Date();

    cartTemplateCopy.find({
        buyer_email: email,
        date: {$gte: new Date(startDate), $lt: new Date(endDate)}
    })
    .then(cart=>{
        res.json(cart)
    })
})

//add cart by buyer email
router.post('/', (req, res)=>{
    if(error) {
		console.log(error)
	} else {
		const buyerCart = new cartTemplateCopy({
            buyer_email: req.body.buyer_email,
            // date: req.body.date,
			// product: req.body.product,
        })
        buyerCart.save()
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(error=>{
                res.json(error)
                console.log(err)
            })
	}
})

//modify cart items
router.put('/buyer/buyeremail/:email', (req, res)=>{
    if(err){
        console.log(err)
    }else{
        const buyerCart = new cartTemplateCopy({
            buyer_email: req.body.buyer_email,
            date: req.body.date,
			product: req.body.product,
        })
        buyerCart.save()
            .then(data=>{
                res.status(200).json(data)
                console.log('successfully add')
            })
            .catch(error=>{
                res.json(error)
                console.log(err)
            })
    }
})

module.exports = router