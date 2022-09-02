export default function calculateImc() {
  const genero = document.querySelectorAll("input[name=genero]");
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");

  const button = document.getElementById("btn");

  const txtImc = document.getElementById("txtImc");
  const txtInfoImc = document.getElementById("txtInfoImc");
  const imageImc = document.getElementById("imageImc");

  const popUp = document.querySelector(".pop-up");

  button.addEventListener("click", calculate);

  function calculate() {
    // PEGANDO A DESGRAÇA DO VALUE DO RADIO MARCADO
    const valueGenero = [];
    for (let index = 0; index < genero.length; index++) {
      if (genero[index].checked) {
        valueGenero.push(genero[index].value);
      }
    }

    if (!valueGenero[0] || !height.value || !weight.value) {
      console.log(valueGenero, height.value, weight.value);
      popUp.classList.add("sucess");

      setTimeout(function () {
        popUp.classList.remove("sucess");
      }, 3000);
    } else {
      const imc = weight.value / (height.value * height.value);

      txtImc.innerText = `${imc.toFixed(1)} kg/m²`;

      if (valueGenero[0] === "man") {
        if (imc < 17.3) {
          txtInfoImc.innerText = "VOCÊ ESTÁ ABAIXO DO PESO";
          imageImc.src = "./images/slim-man.png";
        } else if (imc > 17.3 && imc < 25.5) {
          txtInfoImc.innerText = "VOCÊ ESTÁ COM PESO IDEAL";
          imageImc.src = "./images/fit-man.png";
        } else if (imc > 25.5) {
          txtInfoImc.innerText = "VOCÊ ESTÁ ACIMA DO PESO IDEAL";
          imageImc.src = "./images/fat-man.png";
        }
      } else {
        if (imc < 18.5) {
          txtInfoImc.innerText = "VOCÊ ESTÁ ABAIXO DO PESO";
          imageImc.src = "./images/thin-woman.png";
        } else if (imc > 18.5 && imc < 24.9) {
          txtInfoImc.innerText = "VOCÊ ESTÁ COM PESO IDEAL";
          imageImc.src = "./images/fit-woman.png";
        } else if (imc > 24.9) {
          txtInfoImc.innerText = "VOCÊ ESTÁ ACIMA DO PESO IDEAL";
          imageImc.src = "./images/fat-woman.png";
        }
      }
    }
  }
}
