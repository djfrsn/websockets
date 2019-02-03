import fetch from './utils/fetch';

class WebsocketApi {
  get get() {
    return {
      messages: getMessages.bind(this)
    };
  }
}

function getMessages() {
  return fetch('http://localhost:3077');
}

export default new WebsocketApi();
