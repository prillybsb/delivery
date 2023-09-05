let btnAdd = document.querySelector("#addBotao");

//Criar um evento de click para o botão que irá executar a function anonima

btnAdd.addEventListener("click", function () {
  let inputValor = document.querySelector("#meuInput").value;
  if (inputValor === "") {
    alert("Você não preencheu os campos");
  } else {
    document.querySelector("#mensagem-ok").insertAdjacentHTML(
      "afterend",
      `<div class="card-teste">
          <span>Login efetuado com sucesso</span></div>`
    );

    let mensagem = document.querySelector(".card-teste");
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 3000);
  }
  document.querySelector("#meuInput").value = "";
});
