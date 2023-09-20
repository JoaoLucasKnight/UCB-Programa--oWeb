// Exercicio 1 

var a = 9;
var b =  14;


var soma = a + b;
var multiplicacao = a * b;
var subtracao = a - b;
var divisao = a / b ;


// console.log(`Operação de ${a} e ${b}, Soma ${soma}, subtração ${subtracao}, multplicação ${multiplicacao} e Divisão ${divisao}`);
//

// Exercicio 2 
var Matriz = [];
var transposta = [];
var num = 1;

// Criar matriz
for (let l = 0; l < 3; l++) {
    Matriz[l] = [];
    for (let c = 0; c < 2; c++) {
        Matriz[l][c] = num;
        num++;
    }
}

//ediçãp


// Criar transposta
for (let c = 0; c < 2; c++) {
    transposta[c] = [];
    for (let l = 0; l < 3; l++) {
        transposta[c][l] = Matriz[l][c];
    }
}



// Multiplicação das duas matrizes
var resultado = [];
for (let c = 0; c < Matriz.length; c++) {
    resultado[c] = [];
    for (let l = 0; l < Matriz.length; l++) {
        resultado[c][l] = 0;
        for (let k = 0; k < Matriz[0].length; k++) {
            console.log(c,l,k);
            resultado[c][l] += Matriz[c][k] * transposta[k][l];
        }
    }
}

console.log(resultado);

