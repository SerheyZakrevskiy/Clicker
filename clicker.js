let clicks = 0;

const TIMEOUT = 10000

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = start;

function start() {
    const startTime = Date.now();

    display.textContent = formatTime(TIMEOUT);
    button.onclick = () => counter.textContent = clicks++


    const interval = setInterval(() => {
        const delta = Date.now() - startTime
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100)


    const timeout = setTimeout(() => {
        button.onclick = null;

        if (clicks <= 20) {
            display.textContent = 'Єбать ти лох'
        }
        else if (clicks <= 40 && clicks >= 20) {
            display.textContent = 'Слабо,чувак'
        }
        else if (clicks <= 60 && clicks >= 40) {
            display.textContent = 'НУ МОЛОДЄЦ,ХУЛІ'
        }
        else {
            display.textContent = 'ШО ТИ ТАКЄ НАХУЙ???'
        }
        

        clearInterval(interval)
        clearTimeout(timeout)

        returnButton.style.display = 'block';
    }, TIMEOUT

    
)}

const returnButton = document.querySelector('#returnButton');

returnButton.onclick = () => {
    clicks = 0; // Сбрасываем счетчик кликов
    button.onclick = start; // Восстанавливаем обработчик нажатия на кнопку "Start"
    display.textContent = formatTime(TIMEOUT);
    counter.textContent = clicks;
    returnButton.style.display = 'none'; // Скрываем кнопку "Return"
};



function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2)
}