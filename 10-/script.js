const bg = document.querySelector('.bg')
const letter = document.querySelector('.letter')

let count = 0

let int = setInterval(blur, 30)


function blur() {
    count++

    if (count > 99) {
        clearInterval(int)
    }

    letter.innerHTML = `${count}%`
}