function palindrome(texto) {
    // Dividir la cadena en una lista de caracteres usando split()
    const listaCaracteres = texto.split('');
    
    // Invertir la lista de caracteres usando reverse()
    const listaInvertida = listaCaracteres.reverse();
    
    // Unir la lista de caracteres invertida de nuevo en una cadena usando join()
    const textoInvertido = listaInvertida.join('');
    
    // Verificar si la cadena original es igual a la cadena invertida
    const esPalindromo = texto === textoInvertido;
    
    // Devolver el resultado de la verificación (true si es palíndromo, false si no)
    return esPalindromo;
}

console.log(palindrome("hello")); // debe imprimir false mientras que
console.log(palindrome("hannah")); // debe imprimir true.
console.log(palindrome("hannah")); // debe imprimir true.