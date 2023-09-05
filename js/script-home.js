document.addEventListener("DOMContentLoaded", function () {
  const botao = document.querySelector("#meu-botao");
  const mensagem = document.querySelector("#mensagem");

  botao.addEventListener("click", function () {
    mensagem.textContent = "Pedido realizado!";
  });
});
