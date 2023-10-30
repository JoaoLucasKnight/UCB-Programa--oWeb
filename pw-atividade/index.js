const express = require('express');        // express pusao para rodar no serve 
const bigode = require('mustache-express') // mustache rebderizador 
const app     = express();                 // aqui passamos todas as funções para dentro da const app 


// Aqui definimos onde e como o mustache vai renderizar o html 
app.engine('html', bigode());
app.set('view engine', 'html');
app.set('views', __dirname + '/views')  // indica o caminhos das paginas (__dirname fornece o caminho do arquivo atual )

// nas requisições tipo post os dados são passado no corpo, e com a declaração abaixo conseguimos acessar as info do boy a requisição 
app.use(express.urlencoded({extended: true}))

// rota base
app.get('/', (req,res) =>{
    res.render('index.html')
});


// rota post 
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