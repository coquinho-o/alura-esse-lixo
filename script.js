document.getElementById("comecar").addEventListener("click", function() {
    const descricao = document.getElementById("descricao");
    const resultado = document.getElementById("resultado");

    descricao.textContent = "Você encontrou um caminho misterioso.";
    
    const opcoes = ["Explorar", "Voltar"];
    
    opcoes.forEach(opcao => {
        const button = document.createElement("button");
        button.textContent = opcao;
        button.addEventListener("click", () => {
            resultado.textContent = `Você escolheu ${opcao}.`;
        });
        resultado.appendChild(button);
    });
});
