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
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.timeInterval = setInterval(this.tick, 20);
    };

    pause = () => {
        clearInterval(this.timeInterval);
        inputTimer.disabled = false;
    };

    tick = () => {
        if (this.inputTimer.value > 0) {
            this.timeRemaining -= 0.01;
            inputTimer.disabled = true;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }

        } else {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
            this.inputTimer.value = 0;
        }
    };

    get timeRemaining() {
        return parseFloat(this.inputTimer.value);
    }

    set timeRemaining(time) {
        this.inputTimer.value = time.toFixed(2);
    }
}