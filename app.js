const express = require('express')
const app = new express()



const ejs = require('ejs')
const morgan = require('morgan')
app.set('view engine','ejs')



app.use(express.static('public'))

app.listen(5500); 

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.render('index');
    })

app.get('/about',(req,res)=>{
    res.render('about');
    })
app.get('/contact',(req,res)=>{
    res.render('contact');
     })
app.get('/blog',(req,res)=>{
    res.render('blog')
    })

    
        
    

    

