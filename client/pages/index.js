import { Component } from 'react';
import io from 'socket.io-client';

import Messages from '../components/messages';
import SendMessageInput from '../components/sendMessageInput';
import WebsocketApi from '../websocketApi';

class Index extends Component {
  // connect to WS server and listen event
  componentDidMount() {
    this.socket = io('http://localhost:3077');
    debugger;
  }
  // close socket connection
  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    const { messages } = this.props;

    return (
      <div>
        <SendMessageInput socket={this.socket} />
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

// import io from 'socket.io'

// class {
//   onCreate(input) {
//     this.state = { messages: input.messages };
//   }
//   onMount() {
//     this.socket = io("http://localhost:3077");

//     this.socket.on("messages", message => {
//       this.setState({
//         messages: this.state.messages.concat(message)
//       });
//     });
//   }
//   sendMessage(e, el) {
//     e.preventDefault();
//     console.log("val", val, el);
//     // this.socket.send("messages", val);
//   }
// }
