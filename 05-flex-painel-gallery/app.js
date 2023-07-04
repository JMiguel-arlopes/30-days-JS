const painels = document.querySelectorAll('.painel');

    function toggleOpen() {
        this.classList.toggle('open')
    }

    function animationLetter(e) {
        console.log(e.propertyName)

        if(e.propertyName == 'flex-grow'){
            this.classList.toggle('open-active')
        }
    }

    painels.forEach(painel => painel.addEventListener('click', toggleOpen))
    painels.forEach(painel => painel.addEventListener('transitionend', animationLetter))