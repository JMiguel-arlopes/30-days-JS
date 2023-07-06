const circles = document.querySelectorAll('.circle')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const progress = document.querySelector('.progress')

let count = 1

next.addEventListener('click', () => {
    count++
    if (count > circles.length) {
        count = circles.length;
    }
    update()
})

prev.addEventListener('click', () => {
    count--
    if (count <= 1) {
        count = 1
    }
    update()
})

function update() {

    circles.forEach((circle, i) => {
        if (i < count) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

        const progressBar = document.querySelectorAll('.active');
        console.log(progressBar.length / circles.length)
        progress.style.width = ((progressBar.length - 1) / (circles.length - 1)) * 98 + '%'
    })



}