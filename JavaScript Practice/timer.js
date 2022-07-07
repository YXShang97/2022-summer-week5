function Timer(time) {
  this.time = time;
  this.interval = setInterval(() => {
    this.time++;
    console.log(this.displayTime(this.time));
  }, 1000);
  this.add = (seconds) => (this.time += seconds);
  this.subtract = (seconds) => (this.time -= seconds);
  this.reset = () => {
    this.time = 0;
    clearInterval(this.interval);
  };
  this.start = () => this.interval;
  this.stop = () => clearInterval(this.interval);
  this.displayTime = (time) => {
    return `${Math.floor(time / 60)}:${time % 60 < 10 ? "0" : ""}${time % 60}`;
  };
}

const timer = new Timer(0);

console.log(timer.start());
console.log(timer.stop());
console.log(timer.add(5));
console.log(timer.subtract(3));
