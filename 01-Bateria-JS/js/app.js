const botoes = document.querySelectorAll('.btn'); 

function tocaSom(dataAddress) {
    const dataPlay = dataAddress;

    const sound = document.querySelector(`audio[data-sound=${dataPlay}]`)
    const botao = document.querySelector(`.btn[data-sound=${dataPlay}]`)
    if(!sound) return;
    
    sound.currentTime = 0;
    sound.play();
    botao.classList.add('active');    
}

function removeTransition (e) {
    if(e.propertyName !== 'transform') return; // cancela função
    this.classList.remove('active'); // remove classe de animação
}


botoes.forEach(btn => {
    btn.addEventListener('click', (e) => tocaSom(e.target.dataset.sound));
    btn.addEventListener('transitionend', removeTransition);
})

window.addEventListener('keydown', (e) => tocaSom(e.key.toLowerCase()));

// CÓDIGO ANTIGO: 

// function tocaSomTeclado(e) {
//     const sound = document.querySelector(`audio[data-sound=${e.key.toLowerCase()}]`) // puxando elemento pressionado
//     if(!sound) return; // cancela função

//     sound.currentTime = 0;
//     sound.play(); // toca o audio clicado

//     const botao = document.querySelector(`.btn[data-sound=${e.key.toLowerCase()}]`); // puxa botão pressionado
//     botao.classList.add('active'); // insere classe de animação
// }



// function tocaSomClick(e) {
//     console.log(e.target.dataset.sound)
//     const dataPlay = e.target.dataset.sound;

//     const sound = document.querySelector(`audio[data-sound=${dataPlay}]`)
//     if(!sound) return;
//     const botao = document.querySelector(`.btn[data-sound=${dataPlay}`)

//     sound.currentTime = 0;
//     sound.play();
//     botao.classList.add('active');    
// }