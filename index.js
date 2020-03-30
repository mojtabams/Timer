const inputTimer = document.querySelector("#counter");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter );

let duration = 0;
const timer = new Timer(inputTimer, startBtn, pauseBtn, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute(
            'stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter,
        )
    },
    onComplete() {
        alert('Timer is completed');
    },
});