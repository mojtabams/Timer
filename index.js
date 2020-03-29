class Timer {
    constructor(inputTimer, startBtn, pauseBtn, callbacks) {
        this.inputTimer = inputTimer;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
        this.pauseBtn.addEventListener('input', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.timeInterval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.timeInterval);
        inputTimer.disabled = false;
    };

    tick = () => {
        if (this.inputTimer.value > 0) {
            if (this.onTick) {
                this.onTick();
            }
            --this.inputTimer.value;
            inputTimer.disabled = true;
        } else {
            if(this.onComplete){
                this.onComplete();
            }
            this.inputTimer.value = 0;
            this.pause();
        }
    };
}

const inputTimer = document.querySelector("#counter");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const timer = new Timer(inputTimer, startBtn, pauseBtn, {
    onStart() {
        console.log("its start")
    },
    onTick() {
        console.log("its onTick")
    },
    onComplete() {
        console.log("its onComplete")
    },
});