const bg = document.querySelector('.bg')
const letter = document.querySelector('.letter')
const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const btns = document.querySelectorAll('.btn')

let count = 0

function tiraBlur() {
    count++

    letter.innerHTML = `${count}%`
    letter.style.opacity = scale(count, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`

    if (count < 99) {
        setTimeout(tiraBlur, 40)
    } else {
        btns.forEach(btn => {
            (btn.id == "btn") ? btn.classList.add('active') : btn.classList.remove('active')
        })
    }
}

function insereBlur() {
    count--

    letter.innerHTML = `${count}%`
    letter.style.opacity = scale(count, 100, 0, 1, 0)
    bg.style.filter = `blur(${scale(count, 100, 0, 0, 30)}px)`

    if (count > 1) {
        setTimeout(insereBlur, 40)
    } else {
        btns.forEach(btn => {
            (btn.id == "btn") ? btn.classList.remove('active') : btn.classList.add('active')
        })
    }
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

tiraBlur()
btn.addEventListener('click', insereBlur)
btn2.addEventListener('click', tiraBlur)