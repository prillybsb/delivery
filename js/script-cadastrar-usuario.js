document.addEventListener("DOMContentLoaded", function () {
  const cadastrarUsuarioButton = document.querySelector("#cadastrar-usuario");

  cadastrarUsuarioButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evita o envio do formulário por padrão.

    // Recupere os valores dos campos do formulário
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const imagem = document.querySelector("#imagem").value;
    const endereco = document.querySelector("#endereco").value;
    const favoritos = document.querySelector("#favoritos").value;
    const pedidos = document.querySelector("#pedidos").value;
    const isAdmin = document.querySelector("#admin-sim").checked
      ? "Sim"
      : "Não";

    // Aqui você pode adicionar a lógica para validar os campos do formulário
    // Por exemplo, verifique se os campos obrigatórios estão preenchidos e faça outras validações necessárias.

    // Exemplo de exibição de dados inseridos (você pode substituir isso pela lógica real de envio para o servidor)
    const mensagemResultado = document.querySelector("#mensagem-resultado");
    mensagemResultado.textContent = `
            Nome: ${nome}
            E-mail: ${email}
            Senha: ${senha}
            Imagem: ${imagem}
            Endereço: ${endereco}
            Produtos Favoritos: ${favoritos}
            Pedidos: ${pedidos}
            ADMIN: ${isAdmin}
        `;

    // Limpe os campos do formulário após a exibição dos dados
    document.querySelector("#nome").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#senha").value = "";
    document.querySelector("#imagem").value = "";
    document.querySelector("#endereco").value = "";
    document.querySelector("#favoritos").value = "";
    document.querySelector("#pedidos").value = "";
    document.querySelector("#admin-sim").checked = false;
    document.querySelector("#admin-nao").checked = false;
  });
});
