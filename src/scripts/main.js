document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form-sorteador").addEventListener('submit', function (e) {
        e.preventDefault();

        let input = document.getElementById("numero-maximo");
        let numeroMaximo = parseInt(input.value);

        if (isNaN(numeroMaximo) || numeroMaximo <= 0) {
            alert("Por favor, insira um número válido maior que 0.");
            input.focus();
            return;
        }

        let numeroAleatorio = Math.floor(Math.random() * (numeroMaximo));
        
        document.getElementById("resultado-valor").innerText = numeroAleatorio + 1;
    });
});
