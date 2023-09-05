function consultaEndereco() {
  let cep = document.querySelector("#cep").value;
  if (cep.length != 8) {
    alert("CEP INVÁLIDO, o CEP precisa ter obrigatoriamente 8 números");
    return;
  }

  let url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url).then(function (response) {
    //console.log(response);
    response.json().then(function (data) {
      //console.log(data);
      mostrarEndereco(data);
    });
  });
}

function mostrarEndereco(dados) {
  //console.log(dados)
  let nomeLocalizacao = document.querySelector(".nome-localizacao");
  if (dados.erro) {
    nomeLocalizacao.innerHTML = "CEP NÃO ENCONTRADO";
  } else {
    //console.log(dados.localidade);
    nomeLocalizacao.innerHTML = dados.localidade;
    //parar não ficar aparecendo o espaço que o nome da localidade ocupa e só aparecer após o botão apertado
    cep.style.display = "none";
    nomeLocalizacao.style.display = "flex";
  }
}
