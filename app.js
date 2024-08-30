const express = require('express')

const app = express();

app.set('view engine','ejs')

app.listen(3000)

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index');
    // res.send('ABC');
})
app.get('/portfolio',(req,res)=>{
    res.sendFile('./stockpage.html',{ root:__dirname });
})

