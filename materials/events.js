const EventEmmiter = require('events');

const emmiter = new EventEmmiter();

emmiter.on('anything', data => console.log('on anything', data));

setTimeout(() => {
  emmiter.emit('anything', { a: 1, b: 2 });
}, 1000);

class Dispatcher extends EventEmmiter {
  subscribe (eventName, cb) {
    console.log('[subscribe...]');
    this.on(eventName, cb);
  }

  dispatch (eventName, data) {
    console.log('[dispatch...]');
    this.emit(eventName, data);
  }
}

const dispatcher = new Dispatcher();

dispatcher.subscribe('aa', data => console.log('on aa', data));

setTimeout(() => {
  dispatcher.dispatch('aa', { a: 1, b: 2 });
}, 1000);
