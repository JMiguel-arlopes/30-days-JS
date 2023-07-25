const boxs = document.querySelectorAll('.box')

function animated() {
    const alturaGatilho = window.innerHeight / 5 * 4
    console.log("a altura do gatilho da página é " + alturaGatilho)

    boxs.forEach(box => {
        // box == boxs[0] ? console.log(box.getBoundingClientRect().top) : false
        if (box.getBoundingClientRect().top < alturaGatilho) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

window.addEventListener('scroll', animated)