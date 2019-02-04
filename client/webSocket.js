import fetch from './utils/fetch';
import io from 'socket.io-client';

class WebSocket {
  constructor(options = {}) {
    const { socket_url } = options;

    this.socket_url = socket_url ? socket_url : 'http://localhost:3077';
  }
  get get() {
    return {
      messages: getMessages.bind(this)
    };
  }
  connect() {
    return io(this.socket_url);
  }
}

function getMessages() {
  return fetch(this.socket_url);
}

export default options => new WebSocket(options);
