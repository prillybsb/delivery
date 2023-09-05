let btnAdd = document.querySelector("#addBotao");

//Criar um evento de click para o botão que irá executar a function anonima

btnAdd.addEventListener("click", function () {
  let inputValor = document.querySelector("#meuInput").value;
  if (inputValor === "") {
    alert("Você não preencheu os campos");
  } else {
    alert("Login realizado com sucesso");
  }
  document.querySelector("#meuInput").value = "";
});
