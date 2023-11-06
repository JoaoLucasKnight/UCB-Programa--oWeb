// A controller em uma aplicação web é receber, processar e responder a solicitações dos clientes.

const calculadora = require('../calculadora/calculadora')

function IndexView(req,res){
    res.render('index.html');
}

function calcular(req,res){
    let n1 = Number.parseInt(req.body.n1);
    let n2 = Number.parseInt(req.body.n2);
    let operador = req.body.operador;
    res.send('Resultado da operação' + calculadora.calculo(operador, n1, n2));

}

module.exports ={
    IndexView,
    calcular
}