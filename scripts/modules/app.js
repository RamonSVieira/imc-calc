export default function calculateImc() {}

// DESCOBRIR COMO PEGAR ESSE VALOR AQUI
const sex = document.querySelectorAll("input[name='sex']");

const height = document.getElementById("height");
const weight = document.getElementById("weight");

const button = document.getElementById("btn");

button.addEventListener("click", calculate);

function calculate() {
  console.log(weight.value, height.value);
  const imc = weight.value / (height.value * height.value);

  console.log(imc);
}
