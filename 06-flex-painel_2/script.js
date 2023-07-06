const painels = document.querySelectorAll('.painel');

function toggleClassActive() {
    if (this.className.includes('active')) {
        this.classList.toggle('active')
    } else {
        removeClassActive()
        this.classList.add('active')
    }
}

function removeClassActive() {
    painels.forEach(panel => panel.classList.remove('active'))
}

painels.forEach(panel => panel.addEventListener('click', toggleClassActive))