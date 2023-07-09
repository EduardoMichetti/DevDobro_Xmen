// passo 1 - Pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');
// console.log(personagens);

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach(personagem => {
    // console.log(personagem);
    personagem.addEventListener('mouseenter', () => {
        // console.log('mouse entrou na lista');

        if(window.innerWidth < 450)
        {
                window.scrollTo({top: 0,behavior: 'smooth'})
        } 


// passo 3 - verificar se já existe um personagem selecionado, se SVGImageElement, devemos remover a seleção dele        
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');
        // console.log(document.querySelector('.selecionado'));

// OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande    
// passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

// passo 3 - alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

// passo 4 - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
});

function alterarImagemPersonagemSelecionado(personagem) {
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        // passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        // console.log(idPersonagem);
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
}
