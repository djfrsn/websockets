import Messages from '../components/messages';
import WebsocketApi from '../websocketApi';

const Index = ({ messages }) => (
  <div>
    <Messages messages={messages} />
  </div>
);

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
