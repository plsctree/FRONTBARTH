const btn_promocao = document.getElementById('btn-promocao');

if(btn_promocao){
    btn_promocao.addEventListener('click', function(){
    alert("Promoção Especial! Aproveite condições exclusivas");
}); 
}


const btn_saiba_mais = document.getElementById("btn-saiba-mais");
const mensagem_destino = document.getElementById("mensagem-destino");

if(btn_saiba_mais){
    btn_saiba_mais.addEventListener("click", function (){
    mensagem_destino.textContent =  "Pacote de 7 dias com hospedagem, café da manhã e visita aos principais pontos turísticos de Paris.";
});
}


const btn_destaque = document.getElementById("btn-destaque");
const card_paris = document.getElementById("card-paris");

if(btn_destaque){
    btn_destaque.addEventListener("click", function () {
    card_paris.classList.toggle("destino-destaque");
});

}


//Segunda ativadade 17.09
const campoNome = document.querySelector("#nome");
const campoDestino = document.querySelector("#destino");
const campoQuantidade = document.querySelector("#quantidade");
const btnCalcular = document.querySelector("#btn-calcular");
const elementoResultado = document.querySelector("#resultado");

if (btnCalcular) {
    btnCalcular.addEventListener("click", function () {
        // Lendo os valores digitados/selecionados
        const nome = campoNome.value;
        const destino = campoDestino.value;
        const quantidadeTexto = campoQuantidade.value;

        // Verificando se algum campo está vazio
        if (nome === "" || destino === "" || quantidadeTexto === "") {
            elementoResultado.textContent = "Preencha todos os campos antes de calcular.";
            return;
        }

        // Convertendo a quantidade para número
        const quantidade = Number(quantidadeTexto);

        // Definindo o preço por pessoa com base no destino
        let precoPorPessoa = 0;

        if (destino === "paris") {
            precoPorPessoa = 5900;
        } else if (destino === "florianopolis") {
            precoPorPessoa = 1200;
        } else if (destino === "foz") {
            precoPorPessoa = 1500;
        }

        // Calculando o valor total
        const valorTotal = precoPorPessoa * quantidade;

        // Exibindo a mensagem formatada na página com Template String
        elementoResultado.textContent = `Olá, ${nome}! Sua viagem para ${destino}, para ${quantidade} viajante(s), possui valor estimado de R$ ${valorTotal},00.`;
    });
}