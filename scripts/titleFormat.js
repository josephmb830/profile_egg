function titleFormat(texto) {
    // Obtener la primera letra de la cadena y convertirla a mayúscula
    const primeraLetra = texto.charAt(0).toUpperCase();
    
    // Obtener el resto de la cadena y convertirlo a minúsculas
    const restoDelTexto = texto.slice(1).toLowerCase();
    
    // Concatenar la primera letra en mayúscula con el resto en minúsculas
    const formatoTitulo = primeraLetra + restoDelTexto;
    
    // Retornar la cadena modificada
    return formatoTitulo;
}

console.log(titleFormat("hello world")); 
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLd")); //deben imprimir “Hello world”
console.log(titleFormat("POkEmÓn"));
console.log(titleFormat("GOD OF WAR"));