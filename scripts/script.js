function logar(event) {
  if (event) event.preventDefault();

  const login = document.getElementById("email");
  const senha = document.getElementById("senha");
  const setor1 = "GESTOR";
  const setor2 = "ATENDIMENTO";

  if (login.value === "admin" && senha.value === "admin") {
    window.location.href = `telaprincipal.html?setor=${encodeURIComponent(setor1)}`;
    alert("Bem vindo admin!");
  } else if (login.value === "operacional" && senha.value === "opec2026") {
    window.location.href = `telaprincipal.html?setor=${encodeURIComponent(setor2)}`;
    alert("Bem vindo Operacional!");
  } else {
    alert("Usuário ou senha inválido!");
  }
}

function abrirModal(tipo) {
  const modal = document.getElementById("modal");
  const container = document.getElementById("form-container");
  modal.style.display = "block";
  switch (tipo) {
    case "produtos":
      container.innerHTML = `<h2>Cadastro de Produtos</h2>
        <form id="formproduto">
          <div class="input-group">
          <input type="text" id="nome" name="nome" placeholder=" " required>
          <label for="nome">Nome:</label>
          </div>
          <div class="input-group">
          <input type="text" id="tipo" name="tipo" placeholder=" " required>
          <label for="tipo">Tipo:</label>
          </div>
          <div class="input-group">
          <input type="text" id="fornecedor" name="fornecedor" placeholder=" " required>
          <label for="fornecedor">Fornecedor:</label>
          </div>
          <input type="submit" value="Salvar">
          <input type="reset" value="Limpar">
        </form>`;
      break;
    case "servicos":
      container.innerHTML = `<h2>Cadastro de Serviços</h2>
        <form id="formServico">
          <div class="input-group">
          <input type="text" id="nome" name="nome" placeholder=" " required>
          <label for="nome">Nome:</label>
          </div>
          <div class="input-group">
          <input type="text" id="descricao" name="descricao" placeholder=" " required>
          <label for="descricao">Descrição:</label>
          </div>
          <div class="input-group">
          <input type="number" id="preco" name="preco" placeholder=" " required>
          <label for="preco">Preço:</label>
          </div>
          <input type="submit" value="Salvar">
          <input type="reset" value="Limpar">
        </form>`;
      break;
    case "agendamentos":
      container.innerHTML = `<h2>Cadastro de Agendamentos</h2>
        <form id="formagendamento">
          <div class="input-group">
            <input type="text" id="cliente" name="cliente" placeholder=" " required>
            <label for="cliente">Cliente:</label>
          </div>

          <div class="input-group">
            <input type="text" id="profissional" name="profissional" placeholder=" " required>
            <label for="profissional">Profissional:</label>
          </div>

          <div class="input-group">
            <input type="text" id="servico" name="servico" placeholder=" " required>
            <label for="servico">Serviço:</label>
          </div>

          <div class="input-group">
            <input type="date" id="data" name="data" placeholder=" " required>
            <label for="data">Data:</label>
          </div>

          <div class="input-group">
            <select id="status" name="status" required>
              <option value="" selected disabled hidden></option>
              <option value="pendente">Pendente</option>
              <option value="confirmado">Confirmado</option>
              <option value="cancelado">Cancelado</option>
            </select>
            <label for="status">Status:</label>
          </div>

          <div class="input-group">
            <input type="text" id="observacao" name="observacao" placeholder=" " required>
            <label for="observacao">Observação:</label>
          </div>
          <input type="submit" value="Salvar">
          <input type="reset" value="Limpar">
        </form>`;
      break;
    case "fornecedores":
      container.innerHTML = `<h2>Cadastro de Fornecedores</h2>
        <form id="formfornecedores">
          <div class="input-group">
          <input type="text" id="pessoa" name="pessoa" placeholder=" " required>
          <label for="pessoa">Pessoa:</label>
          </div>
          <div class="input-group">
          <input type="text" id="razao-social" name="razao-social" placeholder=" " required>
          <label for="razao-social">Razão Social:</label>
          </div>
          <div class="input-group">
          <input type="text" id="cnpj" name="cnpj" placeholder=" " required>
          <label for="cnpj">CNPJ:</label>
          </div>
          <input type="submit" value="Salvar">
          <input type="reset" value="Limpar">
        </form>`;
      break;
    case "profissionais":
      container.innerHTML = `<h2>Cadastro de Profissionais</h2>
        <form id="formproficionais">
          <div class="input-group">
          <input type="text" id="pessoa" name="pessoa" placeholder=" " required>
          <label for="pessoa">Pessoa:</label>
          </div>

          <div class="input-group">
          <input type="text" id="tipo-de-profissional" name="tipo-de-profissional" placeholder=" " required>
          <label for="tipo-de-profissional">Tipo de profissional:</label>
          </div>

          <div class="input-group">
          <input type="text" id="conselho-registro" name="conselho-registro" placeholder=" " required>
          <label for="conselho-registro">Conselho de Registro:</label>
          </div>
          
          <div class="input-group">
          <input type="text" id="cpf" name="cpf" placeholder=" " required>
          <label for="cpf">CPF:</label>
          </div>
          <input type="submit" value="Salvar">
          <input type="reset" value="Limpar">
        </form>`;
      break;
    case "clientes":
      container.innerHTML = `<h2>Cadastro de Clientes</h2>
        <form id="formclientes">
          <div class="input-group">
            <input type="text" id="pessoa" name="pessoa" placeholder=" " required>
            <label for="pessoa">Pessoa:</label>
          </div>
          <div class="input-group">
            <input type="date" id="nascimento" name="nascimento" placeholder=" " required>
            <label for="nascimento">Data de Nascimento:</label>
          </div>
          <div class="input-group">
            <input type="text" id="cpf" name="cpf" placeholder=" " required>
            <label for="cpf">CPF:</label>
          </div>
          <div class="input-group">
            <input type="text" id="responsavel" name="responsavel" placeholder=" " required>
            <label for="responsavel">Responsável:</label>
          </div>
          <input type="submit" value="Salvar">
          <input type="reset" value="Limpar">
        </form>`;
      break;
  }

  container.addEventListener("submit", function (e) {
    // Verifica se o que foi enviado é realmente um formulário
    if (e.target.tagName === "FORM") {
      e.preventDefault(); // Impede o recarregamento da página

      try {
        // Captura os dados (opcional, mas bom para testar no console)
        const formData = new FormData(e.target);
        const dados = Object.fromEntries(formData);
        console.log("Dados do formulário:", dados);

        // Alerta de sucesso
        alert("Formulário enviado com sucesso!");

        // Limpa o formulário após o envio
        e.target.reset();
      } catch (error) {
        // Alerta de erro
        alert("Erro ao processar o envio.");
        console.error(error);
      }
    }
  });
}

function fecharModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function sairsistema() {
  window.location.href="login.html"
}