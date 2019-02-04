const Messages = ({ messages = [] }) => {
  return messages.length ? (
    <ul>
      {messages.map(({ value }, i) => (
        <li key={i}>{value}</li>
      ))}
    </ul>
  ) : (
    'No Messages!'
  );
};

export default Messages;
