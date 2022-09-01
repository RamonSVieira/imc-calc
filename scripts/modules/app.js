export default function calculateImc() {
  const genero = document.querySelectorAll("input[name=genero]");
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  const button = document.getElementById("btn");

  const txtImc = document.getElementById("txtImc");
  const txtInfoImc = document.getElementById("txtInfoImc");
  const imageImc = document.getElementById("imageImc");

  console.log(txtImc, txtInfoImc, imageImc);

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

    txtImc.innerText = `${imc.toFixed(1)} kg/m²`;

    if (valueGenero[0] === "man") {
      if (imc < 17.3) {
        txtInfoImc.innerText = "MAGO PRA KARA***";
        imageImc.src = "./images/slim-man.png";
      } else if (imc > 17.3 && imc < 25.5) {
        txtInfoImc.innerText = "POR** TU TREINA É BOE?";
        imageImc.src = "./images/fit-man.png";
      } else if (imc > 25.5) {
        txtInfoImc.innerText =
          "TA ME OLHANDO PORQUE? TA PENSANDO QUE EU SOU UM SACO DE DORITOS É GORDOLA?";
        imageImc.src = "./images/fat-man.png";
      }
    } else {
      if (imc < 18.5) {
        txtInfoImc.innerText = "SÓ O PALITO";
        imageImc.src = "./images/thin-woman.png";
      } else if (imc > 18.5 && imc < 24.9) {
        txtInfoImc.innerText = "ESSA É RATA DE ACADEMIA";
        imageImc.src = "./images/fit-woman.png";
      } else if (imc > 24.9) {
        txtInfoImc.innerText = "KRAI, TA MAIS GORDA QUE A MÃE DE JADSON";
        imageImc.src = "./images/fat-woman.png";
      }
    }
  }
}
