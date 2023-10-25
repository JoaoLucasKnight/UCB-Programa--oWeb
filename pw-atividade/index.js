const express = require('express');
const bigode = require('mustache-express')
const app     = express();

app.engine('html', bigode());
app.set('view engine', 'html');
app.set('views', __dirname + '/views')

app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) =>{
    res.render('index.html')
});

app.post('/dados', (req,res) =>{
    let dados ={
        nome: req.body.nome,
        endereço: req.body.address,
        telefone: req.body.telefone,
        data: req.body.data  
    };
    res.render('dados.html',{dados})
});


const PORT = 8080;
app.listen(PORT, function (){
    console.log("Rodando", + PORT)
});