// meu verificardor de numero primo 
var numero = 601;

    for(i = numero-1; i >=0 ; i--){
        if (numero % i == 0 && i != 1 ){
            console.log('Não é primo');
            break;
        }

        if (i == 1 || i == 0){
            console.log('Numero primo');
            break;

        }
        //console.log(`Opção 1: ${i}`)
    }

    // outrsa formas de fazer 
    var ePrimo = true;

    if (numero <= 1) {
        ePrimo = false;
    } else {
        for (var i = 2; i <= Math.sqrt(numero); i++) { // Isso ocorre porque, para verificar se um número é primo, só precisamos verificar divisores até a sua raiz quadrada. 
            if (numero % i === 0) {
                ePrimo = false;
                break;
            }
        console.log(`Opção 2: ${i}`)
        }
    }

    if (ePrimo) {
        console.log('Número primo');
    } else {
        console.log('Não é primo');
    }

//Outra formas 
var ePrimo = true;

    if (numero <= 1) {
        ePrimo = false;
    } else if (numero <= 3) {
        ePrimo = true;
    } else if (numero % 2 === 0 || numero % 3 === 0) {
        ePrimo = false;
    } else {
        var i = 5;
        while (i * i <= numero) {
            if (numero % i === 0 || numero % (i + 2) === 0) {
                ePrimo = false;
                break;
            }
            console.log(`Opção 3: ${i}`)
            i += 6;
            
        }
    }

    if (ePrimo) {
        console.log('Número primo');
    } else {
        console.log('Não é primo');
    }

// Adicionei un consoles logo em cada codigo, para ver quantas operações são realizadas e assim descobrir o mais eficiente
// opção 3: numero 601 fez 4 operações
// Opção 2: numero 601 fez 23 operações 
// opção 1: numero 601 fez 600 operações  