const route= require('express').Router();


route.get('/', (req,res)=>{
    res.render('home')
}) 

route.get('/services', (req,res)=>{
    res.render('ourservice')
})

route.get('/ourtech', (req,res)=>{
    res.render('ourtech')
})

route.get('/manpower', (req,res)=>{
    res.render('manpower')
})

route.get('/quality', (req,res)=>{
    res.render('quality')
})

route.get('/quality2', (req,res)=>{
    res.render('quality2')
})

route.get('/contact', (req,res)=>{
    res.render('contact')
})


module.exports = route;