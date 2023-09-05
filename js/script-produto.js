let coracao = document.querySelector(".bi-heart-fill");
coracao.addEventListener("click", function (event) {
  //dentro da minha target tudo que tiver o nome I
  if (event.target.nodeName === "I") {
    event.target.classList.toggle("red");
  }
});
