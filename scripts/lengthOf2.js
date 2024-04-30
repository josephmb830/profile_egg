const lengthOf = (cadena) => {
    if (typeof cadena !== 'string') {
    return "Invalid input";
    } else if (cadena === "") {
    return "Invalid input";
    } else {
    return cadena.length;
    }
    }
    
    // Ejemplos de uso
    console.log(lengthOf("hello")); // Debería imprimir la longitud de la cadena "hello"
    console.log(lengthOf("")); // Debería imprimir "Invalid input"