function calculo (operador, n1, n2) {
    
    switch (operador){
        case Somar:
            return n1 +n2;
        break;
    
        case Subtrair:
            return n1 - n2;
        break;
      
        case Multiplicar:
            return n1 * n2;
        break;
        
        case Dividir:
            return n1 / nn2;
        break;
    }
}


module.exports = {
    calculo
}