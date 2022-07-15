require('dotenv').config()

const express = require('express')


//express app
const app = express();



//routes
app.get('/',(req, res)=>{

    res.json({mssg:'welcome to the home page'})

})

//listen for request
app.listen(process.env.PORT, ()=>{
    console.log('listenx to server 4000')
})

