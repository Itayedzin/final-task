## Notas Cifrado César
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.
Consideraciones:
1. Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
2. Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
3. El usuario no debe poder ingresar un campo vacío o que contenga números

## Pseudocódigo para Cifrado César
1. Crear las funciones cipher y decipher
2. Solicitar por medio de un prompt() una frase al usuario
3. Identificar si los caracteres son números, espacios o letras
4. En caso de que sean números o espacios, enviar una alerta que diga que el usuario no debe ingresar espacios o números.
5. En caso de que sean sólo letras, obtener el código ascii de cada una de las letras resultantes por medio de un charCodeAt.
5. Aplicar la fórmula del Cifrado César a cada letra para obtener su código ascii cifrado, recorriendo la posición 33 lugares (con variaciones para mayúsculas y minúsculas).
6. Obtener la letra que corresponde a dicho código ascii por medio de String.fromCharCode().
7. Devolver el mensaje encriptado y desencriptado según el algoritmo del Cifrado César.

## Diagrama de flujo
A continuación se incluye el diagrama de flujo
![Prueba de diagrama](flowchart.png)
