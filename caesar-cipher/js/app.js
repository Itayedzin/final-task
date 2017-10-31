//Solicitar la frase al usuario
var str = prompt ("Por favor, ingresa una frase sin números o espacios.");

//Identificar si hay números o espacios
if (str.indexOf(' ') >= 0 || str.indexOf(1) >= 0 || str.indexOf(2) >= 0 || str.indexOf(3) >= 0 || str.indexOf(4) >= 0 || str.indexOf(5) >= 0 || str.indexOf(6) >= 0 || str.indexOf(7) >= 0 || str.indexOf(8) >= 0 || str.indexOf(9) >= 0 || str.indexOf(0) >= 0){
  alert("Su frase contiene espacios o números y no es válida.");
}
  //codificar la frase válida
  else {
    function cipher(frase){
      var output = ""; //declaramos una variable de salida para codificar letra por letra
      for (var i=0; i<frase.length;i++){ //iteración con indice
        var codeAscii = frase.charCodeAt(i); //variable para identificar el código ascii
        if (65 <= codeAscii && codeAscii <= 90){
          output += String.fromCharCode((codeAscii - 65 + 33) % 26 + 65 ); //Caso mayúsculas
        } else if (97 <= codeAscii && codeAscii <= 122){
            output += String.fromCharCode((codeAscii -97 + 33) % 26 + 97); //Caso minúsculas
          }
      }
      console.log (output);
      document.write ("Tu frase codificada es " + output);
    }
  }

  //decodificar la frase válida
  function decipher(frase){
      var output = "";
      for (var i=0; i<frase.length;i++){
        var decoded = frase.charCodeAt(i);
        if (decoded >= 65 && decoded <= 90){
          output += String.fromCharCode(decoded - 33 % 26 ); //caso mayúsculas
        } else if (decoded >= 97 && decoded <= 122){
            output += String.fromCharCode(decoded - 33 % 26 ); //caso minusculas
          }
      }
      console.log (output);
      document.write ("</br>" + "Tu frase decodificada es " + output);
    }

//Funciones
cipher (str);
decipher (str);
