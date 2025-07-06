/*
JavaScript – adicionar um botão para interagir com a página
• Criar um botão abaixo do parágrafo com o texto "Clique para ver uma
mensagem!".
• Quando o usuário clicar, uma mensagem (por exemplo uma frase de
motivação, saudação,boasvindas, etc.) deveráaparecerabaixo do botão.
*/

let text = document.querySelector("button");

text.addEventListener("click", mensagem);

function mensagem() {
    let p2 = document.querySelector("p2");
    let x = [1,2,3,4,5];
    x = Math.floor((Math.random() * x.length) + 1); // Gera um número aleatório entre 0 e 3
    if(x===1){
        p2.innerHTML = "Você é incrível! Continue sempre assim!";
}
    if(x===2){
            p2.innerHTML = "A vida é cheia de desafios, mas você é mais forte do que imagina!";
    }
    if(x===3){
            p2.innerHTML = "Nunca desista dos seus sonhos! Você é capaz de realizá-los!";
    }
    if(x===4){
            p2.innerHTML = "Seja a mudança que você deseja ver no mundo!";
    }
    if(x===5){
            p2.innerHTML = "Siga firme nos seus sonhos! O sucesso está a um passo de distância!";
    }
}