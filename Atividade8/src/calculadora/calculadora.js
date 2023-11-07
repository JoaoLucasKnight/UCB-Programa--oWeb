function calculo (operador, n1, n2) {
    let resultado;
    switch (operador){
        case 'Somar':
            resultado = n1 +n2;
        break;
    
        case 'Subtrair':
            resultado = n1 - n2;
        break;
      
        case 'Multiplicar':
            resultado = n1 * n2;
        break;
        
        case 'Dividir':
            resultado = n1 / n2;
        break;
    }
    return resultado;
}


module.exports = {
    calculo
}