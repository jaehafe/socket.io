import { useEffect, useState } from 'react';

import { io, Socket } from 'socket.io-client';

const socket: Socket = io('http://localhost:3000');
console.log('socket>>>', socket);

socket.on('connect', () => {
  console.log('connection server');
});

function App() {
  const [room, setRoom] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [messageReceived, setMessageReceived] = useState<string | null>(null);

  const joinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (room !== '') {
      socket.emit('join_room', room);
    }
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit('send_message', { message, room });
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log('data>>>', data);

      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div>
      <form onSubmit={joinRoom}>
        <input
          placeholder="Room Number..."
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
        <button type="submit"> Join Room</button>
      </form>

      <form onSubmit={sendMessage}>
        <input
          placeholder="Message..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit">Send Message</button>
      </form>
      <h1> Message:</h1>
      {messageReceived}
    </div>
  );
}

export default App;
