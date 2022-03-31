const buttons = document.getElementById('buttons');
const semaforo = document.getElementById('semaforo');
let colorIndex = 0;
let interval = null

buttons.addEventListener('click', trafficLight);

function trafficLight(event){
    stopAuto();
    turnOn[event.target.id]();
}

const netxIndex = () => {

    colorIndex < 2 ? colorIndex++ : colorIndex = 0;

    // if(colorIndex < 2){
    //     colorIndex++;
    // } else {
    //     colorIndex = 0;
    // }
}

const changecolor = () => {
    const colors = ['red', 'green', 'yellow'];
    const color = colors[colorIndex];
    turnOn[color]();
    netxIndex();
}

const stopAuto = () => {
    clearInterval(interval)
}

const turnOn = {
    'red': () => semaforo.src = './assets/vermelho.png',
    'yellow': () => semaforo.src = './assets/amarelo.png',
    'green': () => semaforo.src = './assets/verde.png',
    'automatic': () => interval = setInterval(changecolor, 1500)
};
