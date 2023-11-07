// A controller em uma aplicação web é receber, processar e responder a solicitações dos clientes.

const calculadora = require('../calculadora/calculadora')

function IndexView(req,res){
    res.render('index.html');
}

function calcular(req,res){
    let n1 = Number.parseInt(req.body.n1);
    let n2 = Number.parseInt(req.body.n2);
    const operador = req.body.operador;
    const resultado = calculadora.calculo(operador, n1, n2)
    
    res.render('Resultado.html',{resultado, operador})

}

module.exports ={
    IndexView,
    calcular
}