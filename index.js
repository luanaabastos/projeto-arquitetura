function confirmaEnvio() {
    var confirma = confirm("Você realmente deseja enviar o formulário?");
    if (confirma) {
        alert("Seu formulário será enviado. Em breve nossa equipe entrará em contato.");
        return true;
    } else {
        return false;
    }
}