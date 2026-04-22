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
