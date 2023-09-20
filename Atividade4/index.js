const calc = require('./util/calculadora');
const express = require('express');

const app = express();

// caminho passando a função e os numeros para operação 
app.get("/:rota/:a/:b", function (req, res) {
    let rota = req.params.rota;
    let a = req.params.a;
    let b = req.params.b;
    
    switch(rota){
        case 'somar':
            res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
            break

        case 'subtrair':
            res.send(`${a} - ${b} = ${calc.subtrair(a, b)}`);
            break

        case 'multiplicar':
            res.send(`${a} * ${b} = ${calc.multiplicar(a, b)}`);
            break

        case 'dividir':
             res.send(`${a} / ${b} = ${calc.dividir(a, b)}`);
            break
    }
});



// subindo o serve 
const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta "+PORT);
});
