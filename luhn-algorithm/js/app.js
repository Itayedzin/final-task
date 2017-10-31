var card = prompt('¿Cuál es el número de la tarjeta de crédito?');
var cardArray = [];

function isValidCard (cardNumber){
  for (var i  = card.length -1; i >= 0 ; i--){
    cardArray.push(parseInt(card[i])); //invertir los números
  }

  console.log (card);
  console.log(cardArray);

  var totalAdd = 0; //declarando el valor de la suma total de los números en posición par

  for (i = 0; i < cardArray.length; i++) { //hacer un for para iterar valor por valor del array
    if (i % 2 !== 0) { //asegurarnos que sólo sean en posición par
      var singleNumber = cardArray[i]*2; //multiplicar cada valor por 2
    }

    if (singleNumber >= 10){ //identificando los numeros que son mayores o iguales a 10 para hacer la suma de sus digitos
      singleNumber = (singleNumber % 10) + parseInt(singleNumber/10);  //sumando sus digitos
    totalAdd += singleNumber; //añadiéndolos a la suma total
    } else {
        totalAdd += cardArray[i]; //En caso de que la multiplicación no sea mayor o igual a 10, sumarla al gran total
      }
  }

  if (totalAdd % 10 === 0){ //Revisando si el % 1o de la suma total es igual a 0
    document.write ("Tarjeta válida");
  } else {
    document.write ("Tarjeta inválida");
  }
}

// función
isValidCard (card);
