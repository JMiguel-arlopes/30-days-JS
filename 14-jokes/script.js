const elAdvice = document.getElementById('advice')
const btn = document.getElementById('btnAdvice')

async function getAdvice() {
    elAdvice.innerText = 'carregando..'
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    const advice = data.slip.advice

    elAdvice.innerText = advice
}

getAdvice()
btn.addEventListener('click', getAdvice)
