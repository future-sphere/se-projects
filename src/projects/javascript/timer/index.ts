class Timer {
  time: number;
  interval: NodeJS.Timer;
  constructor(time) {
    this.time = time;
  }

  start() {
    this.interval = setInterval(() => {
      this.time++;
      console.log(this.displayTime(this.time));
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.time = 0;
    clearInterval(this.interval);
  }

  add(seconds) {
    this.time += seconds;
  }

  subtract(seconds) {
    this.time -= seconds;
  }

  // static method
  displayTime(time) {
    return `${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`;
  }
}

const timer = new Timer(0);

timer.start();
setTimeout(() => {
  timer.stop();
}, 1000);
timer.add(5);
timer.subtract(3);
