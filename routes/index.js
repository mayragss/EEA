const express= require('express'),
route = express.Router();


route.get('/', (req,res)=>{
    console.log('index')
    res.render('home')
})


module.exports = route;