const horario = document.querySelector('.horario');

const ponteiroSegundos = document.querySelector('.segundos');
const ponteiroMinutos = document.querySelector('.minutos');
const ponteiroHoras = document.querySelector('.horas');

function setDate() {

    const presente = new Date();

    const segundos = presente.getSeconds();
    const grauSegundos = (segundos / 60) * 360 + 90;

    const minutos = presente.getMinutes();
    const grauMinutos = (minutos / 60) * 360 + 90;

    const horas = presente.getHours();
    const grauHoras = (horas / 24) * 360 + 90;

    ponteiroSegundos.style.transform = `rotate(${grauSegundos}deg)`;
    ponteiroMinutos.style.transform = `rotate(${grauMinutos}deg)`;
    ponteiroHoras.style.transform = `rotate(${grauHoras}deg)`;


    let onlyNumber = false;

    if (horas < 10 || minutos < 10) {
        onlyNumber = true;
    }

    if (onlyNumber && horas < 10) {
        horario.textContent = '0' + horas + ':' + minutos;
    }

    if (onlyNumber && minutos < 10) {
        horario.textContent = horas + ':' + '0' + minutos;
    }

    if (!onlyNumber) {
        horario.textContent = horas + ':' + minutos;
    }
}

setInterval(setDate, 1000);