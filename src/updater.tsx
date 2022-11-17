import hass from "./hass";

class Updater {
  timeout = 0;
  callback: (states: any) => void = () => {};

  constructor() {
    this.update();
  }

  update() {
    clearTimeout(this.timeout);
    console.log("update");

    hass("get", "states")
      .then((states) => this.callback(states))
      .finally(() => {
        this.timeout = window.setTimeout(() => this.update(), 6000);
      });
  }

  setCallback(callback: (states: any) => void) {
    this.callback = callback;
  }
}

const updater = new Updater();

export default updater;
