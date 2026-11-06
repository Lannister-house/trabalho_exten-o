document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.querySelector("form");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailDigitado = document.getElementById("email").value.trim();
        const senhaDigitada = document.getElementById("senha").value;

        
        const usuariosAutorizados = [
            
            { email: "cliente@Numero1.com", senha: "123", destino: "index.html" },

            { email: "Equipe@ferrarezi.com", senha: "adm123", destino: "painel.html" },
            { email: "Equipe2@ferrarezi.com", senha: "adm123", destino: "painel.html" },
            { email: "Equipe3@ferrarezi.com", senha: "adm123", destino: "painel.html" }
        ];

        const usuarioValido = usuariosAutorizados.find(
            user => user.email === emailDigitado && user.senha === senhaDigitada
        );

        if (usuarioValido) {
        
            window.location.href = usuarioValido.destino;
        } else {
            alert("E-mail ou senha incorretos. Tenta novamente!");
        }
    });
});

