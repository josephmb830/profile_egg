function stringIncludes(str1, str2) {
    // Verificar si la primera cadena está incluida en la segunda utilizando el método includes()
    const estaIncluida = str2.includes(str1);
    
    // Devolver el resultado de la verificación
    return estaIncluida;
}

console.log(stringIncludes("he","Hello")) //debe imprimir false mientras que 
console.log(stringIncludes("he","hello world")) //debe imprimir true.