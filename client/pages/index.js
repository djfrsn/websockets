import { Component } from 'react';

import Messages from '../components/messages';
import SendMessageInput from '../components/sendMessageInput';
import WebSocket from '../webSocket';

const Socket = WebSocket();

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: props.messages
    };
  }
  // connect to WS server and listen event
  componentDidMount() {
    this.socket = Socket.connect();

    this.socket.on('message', this.handleMessage);

    this.setState({ socket: this.socket });
  }
  // close socket connection
  componentWillUnmount() {
    this.socket.off('message', this.handleMessage);
    this.socket.close();
  }
  handleMessage = message => {
    this.setState(state => ({ messages: state.messages.concat(message) }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div>
        <SendMessageInput s />
        <Messages messages={messages} />
      </div>
    );
  }
}

Index.getInitialProps = async () => {
  const { messages } = await Socket.get.messages();

  return { messages };
};

export default Index;
