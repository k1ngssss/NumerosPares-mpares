function validar(){
    let numero = parseFloat(document.getElementById('numero').value);

//Verificar se o número é par ou ímpar
    let numerov 
    if (numero % 2 == 0) {
        numerov = "O número inserido é par."
    }
    else if (numero % 2 != 0) {
        numerov = "O número inserido é ímpar."
  }


//Verificador de valores
if (isNaN(numero)) {
    alert("Por favor preencha todos os campos.");
   return;
}

//Background color
if (numero % 2 == 0) {
    document.body.style.backgroundColor = "blue";
  }
  else if (numero % 2 != 0) {
    document.body.style.backgroundColor = "orange";
  }

//Output HTML
document.getElementById('outputHTML').innerHTML = `
<p>O número é par ou ímpar? ${numerov}</p>
`;

}