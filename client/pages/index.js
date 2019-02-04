import { Component } from 'react';
import io from 'socket.io-client';

import Messages from '../components/messages';
import SendMessageInput from '../components/sendMessageInput';
import WebsocketApi from '../websocketApi';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: props.messages
    };
  }
  // connect to WS server and listen event
  componentDidMount() {
    this.socket = io('http://localhost:3077');

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
  const { messages } = await WebsocketApi.get.messages();

  return { messages };
};

export default Index;
