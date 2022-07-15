const  express = require('express')

const router = express.Router()


//get all workpout
router.get('/',(req, res)=>{
    res.json({mssg:'get all workout'})
})


//get a single workout
router.get('/:id',(req, res)=>{
    res.json({mssg:'get a single work out workout'})
})


//POST a new workout
router.post('/',(req,res)=>{
    res.json({mssg:'POST a new work pout'})
})

//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'DELETE a  work pout'})
})

//update a work out
router.patch('/:id',(req,res)=>{
    res.json({mssg:'UPDATE a  workout'})
})

module.exports = router