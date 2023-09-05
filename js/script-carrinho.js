let modal = document.querySelectorAll(".imagem-produto");

let excluir = document.querySelectorAll(".bi-trash");

for (let i = 0; i < excluir.length; i++) {
  excluir[i].addEventListener("click", function (event) {
    modal[i].remove();
  });
}
