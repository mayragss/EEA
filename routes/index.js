const route= require('express').Router();


route.get('/', (req,res)=>{
    res.render('home')
})

route.get('/contact', (req,res)=>{
    res.render('contact')
})


module.exports = route;