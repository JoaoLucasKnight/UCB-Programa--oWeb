const express = require('express');
const bigode = require('mustache-express')
const app     = express();

app.engine('html', bigode());
app.set('view engine', 'html');
app.set('views', __dirname + '/views')

app.get('/', (req,res) =>{
    res.render('index.html')
})

const PORT = 8080;
app.listen(PORT, function (){
    console.log("Rodando", + PORT)
});