const express = require('express');
const bigode = require ('mustache-express');
const app = express();

//Engine para leitura de html
app.engine('html', bigode());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

//manipular dados da URL
app.use(express.urlencoded({extended: true}));

// Todas as requisições serão enviadas paras calculadora routes 
app.use('/', require('./src/routes/calculadoraRoutes'));

//Porta
const PORT = 8000
app.listen(PORT, function(){
    console.log("Rodando na " + PORT);
})