const RED = 0, GREEN = 1, ORANGE = 2;
const lights = [
 document.querySelector('.stop'),
 document.querySelector('.go'),
 document.querySelector('.wait'),
];
let idTimeout, cpt = 0, speed = 3000;

function turnOn(el = lights[RED]){
    lights.map(light => light.classList.remove('active'));
    el.classList.add('active') ;
}

function runTrafficLight() {
    idTimeout = setTimeout(() => {
        if(cpt===2) cpt = -1;
        turnOn(lights[++cpt]);
        speed = cpt < 2 ? 3000 : 1000;
        runTrafficLight();
    }, speed );
}

document.querySelector('button').addEventListener
('click', () =>{
    clearTimeout(idTimeout);
    cpt = 0;
    turnOn(lights[RED]);
    // setTimeout(runTrafficLight,2000);
    runTrafficLight();
});

runTrafficLight();


