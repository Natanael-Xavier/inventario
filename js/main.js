/*showBtn.onclick = () => {
    if (passField.type == "password") {
        passField.type = "text";
        showBtn.classList.add("hide-btn");
    } else {
        passField.type = "password";
        showBtn.classList.remove("hide-btn");
    }
};*/

function logando() {
    login = document.getElementById('login').value;
    senha = document.getElementById('senha').value;
    if (login == "admin" && senha == "admin") {
        alert('Logado Com Sucesso!');
        window.location = "paineladmin.html";
    } else {
        alert('Usuário ou senha incorreto!');
    }
}