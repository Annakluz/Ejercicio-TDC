//VARIABLES GLOBALES

function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(creditCardNumber == undefined){ //TEST 1
        return("Ingresa un numero");
    }
    if(typeof creditCardNumber != "number"){ //TEST 2
        return("Error de dato");
    }
    if(numeros(creditCardNumber) = false){ //TEST 3
        return("Faltan numeros");
    //FUNCTION TEST3
    function numeros(creditCardNumber){
    let number = creditCardNumber.toString();
    if(number.length == 16){
        return(true);
    }
}
    }
    if(validarNumero(creditCardNumber) == true){ //TEST 4 y 5
        return(true);
    } else {
        return (false);
    }
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
