const express = require('express')


//express app
const app = express();

app.get('/',(req, res)=>{

    res.json({mssg:'welcome to the home page'})

})

//listen for request
app.listen(4000, ()=>{
    console.log('listenx to server 4000')
})