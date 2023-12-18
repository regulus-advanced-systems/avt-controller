'use client';

import style from './dashboard.module.css';

const Dashboard = () => {
  const sendCommand = async (command) => {
    try {
      const res = await fetch('/api/v1/command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <button
        className={style.button}
        onMouseDown={() => sendCommand('left-down')}
        onMouseUp={() => sendCommand('left-up')}
      >
        left
      </button>
      <button
        className={style.button}
        onMouseDown={() => sendCommand('right-down')}
        onMouseUp={() => sendCommand('right-up')}
      >
        right
      </button>
    </div>
  );
};

export default Dashboard;
