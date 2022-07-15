require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


//express app
const app = express();


//midddleware

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
})


//routes
app.use('/api/routes',workoutRoutes)


// connect to database
mongoose.connect()


//listen for request
app.listen(process.env.PORT, ()=>{
    console.log('listenx to server 4000')
})

