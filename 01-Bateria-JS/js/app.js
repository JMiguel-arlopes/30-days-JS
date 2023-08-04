const botoes = document.querySelectorAll('.btn');

function tocaSom(dataAddress) {

    const sound = document.querySelector(`audio[data-sound=${dataAddress}]`)
    const botao = document.querySelector(`.btn[data-sound=${dataAddress}]`)
    if (!sound) return;

    sound.currentTime = 0;
    sound.play();
    botao.classList.add('active');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // cancela função
    this.classList.remove('active'); // remove classe de animação
}


botoes.forEach(btn => {
    btn.addEventListener('click', (e) => tocaSom(e.target.dataset.sound));
    btn.addEventListener('transitionend', removeTransition);
})

window.addEventListener('keydown', (e) => tocaSom(e.key.toLowerCase()));
