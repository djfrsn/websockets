import { Component } from 'react';
import io from 'socket.io-client';

class SendMessageInput extends Component {
  // add messages from server to the state
  state = {
    field: ''
  };
  componentDidMount() {
    this.socket = io('http://localhost:3077');
  }
  handleMessage = message => {
    console.log('message', message);
  };

  handleChange = event => {
    this.setState({ field: event.target.value });
  };

  // send messages to server and add them to the state
  handleSubmit = event => {
    event.preventDefault();

    // create message object
    const message = {
      id: new Date().getTime(),
      value: this.state.field
    };
    console.log('this', message);

    // send object to WS server
    this.socket.emit('message', message);

    // add it to state and clean current input value
    this.setState({
      field: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Hello world!"
          value={this.state.field}
        />
        <button>Send</button>
      </form>
    );
  }
}

export default SendMessageInput;
