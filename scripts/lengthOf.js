function lengthOf(text) {
    // Verifica si la cadena es vacía
    if (text === "") {
        return "Invalid input";
    }
    // Retorna la longitud de la cadena de texto
    return text.length;
}

// Ejemplo de uso:
console.log(lengthOf("Hola, mundos!")); // Debería imprimir: 13
console.log(lengthOf("")); // Debería imprimir: Invalid input
console.log(lengthOf("hello")); // debe imprimir 5 
console.log(lengthOf("Hola, mundos!")); // Debería imprimir: 13