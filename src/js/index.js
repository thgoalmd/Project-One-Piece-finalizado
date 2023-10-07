//Passo 1 Acima Adicionar todos os botões 🙌👍😎
//passo 2 Abaixo- Adicioanr a classe "selecionada" no botão 

const botao = (document .getElementById('chopper'));


const botoes = document.querySelectorAll('.botao');
console.log(botoes);

//Objetivo 2 quando clicar no botao do personagem mostrar as infos dos personagem
//Passo 1-Pegar os personagens no JS pra poder mostrar ou esconder eles
const personagens = document.querySelectorAll(".personagem");

//Passo 2-Adicionar a classe selecionado no Personagem que o usuario Selecionou

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
          
        //Passo 3 Verificar se Já é existente um botão selecionado, se existir Removelo de Selecionado
        desselecionarbotao();

        //Passo 3
        desselecionarPersonagem();


        //passo 2 Abaixo- Adicioanr a classe "selecionada" no botão que o usuário clicou
        
        botao.classList.add("selecionado");

        //passo 2(2)
        personagens[indice].classList.add("selecionado");
        
    });
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

