function checkProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (checkProperty(this.events, event)) {
      this.events[event].push(callback);
    } else {
      this.events[event] = [callback];
    }
  }

  emit(event, value) {
    console.log(this.events);
    this.events[event].forEach((callback) => callback(value));
  }
}
