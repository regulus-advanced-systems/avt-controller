'use client';

import { Container } from './dashboard.elements';

const Dashboard = () => {
  const sendCommand = async (command) => {
    const res = await fetch('/api/v1/command', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ command }),
    });
    const data = await res.json();

    if (data.success) {
      alert(`Server returned: ${data.message}`);
    }
  };

  return (
    <Container>
      <button onClick={() => sendCommand('left')}>send command</button>
    </Container>
  );
};

export default Dashboard;
