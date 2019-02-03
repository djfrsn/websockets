const Messages = ({ messages = [] }) => {
  return messages.length
    ? messages.map((message, i) => (
        <ul key={i}>
          <li>{message}</li>
        </ul>
      ))
    : 'No Messages!';
};

export default Messages;
