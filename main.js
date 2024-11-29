const { exec } = require('child_process');

// Função para executar um comando Git
function executarComandoGit(comando) {
  exec(comando, (erro, stdout, stderr) => {
    if (erro) {
      console.log(`Erro: ${erro.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

// Adicionando botão para Git Status
document.addEventListener("DOMContentLoaded", () => {
  const botaoGitStatus = document.createElement("button");
  botaoGitStatus.id = "git-status-btn";
  botaoGitStatus.innerText = "Verificar Status do Git";

  botaoGitStatus.addEventListener("click", () => {
    executarComandoGit("git status");
  });

  document.body.appendChild(botaoGitStatus);
});
