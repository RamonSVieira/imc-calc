export default function calculateImc() {}

const genero = document.querySelectorAll("input[name=genero]");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const button = document.getElementById("btn");

button.addEventListener("click", calculate);

function calculate() {
  const imc = weight.value / (height.value * height.value);

  // PEGANDO A DESGRAÇA DO VALUE DO RADIO MARCADO
  const valueGenero = [];
  for (let index = 0; index < genero.length; index++) {
    if (genero[index].checked) {
      valueGenero.push(genero[index].value);
    }
  }

  console.log(imc);

  if (valueGenero[0] === "man") {
    console.log(valueGenero[0]);
    if (imc < 17.3) {
      console.log("MAGREZA");
    } else if (imc > 17.3 && imc < 25.5) {
      console.log("NORMAL");
    } else if (imc > 25.5) {
      console.log("SOBREPESO");
    }
  } else {
    console.log(valueGenero[0]);
    if (imc < 18.5) {
      console.log("MAGREZA");
    } else if (imc > 18.5 && imc < 24.9) {
      console.log("NORMAL");
    } else if (imc > 24.9) {
      console.log("SOBREPESO");
    }
  }

  console.log(valueGenero);
}
