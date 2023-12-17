'use server';

import { redirect } from 'next/navigation';

const sendCommand = async (command) => {
  try {
    //INFO: Tu ide api call prema Apache MQ serveru
    // const AMQ_URL = 'http://localhost:8161/api/message/test?type=queue';
    // const AMQ_USERNAME = 'admin';
    // const AMQ_PASSWORD = 'admin';
    // const res = await fetch(AMQ_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     Authorization: 'Basic ' + btoa(AMQ_USERNAME + ':' + AMQ_PASSWORD),
    //   },
    //   body: `body=${command}`,
    // });
    // const data = await res.json();
  } catch (error) {
    redirect('/?res=error');
  }

  redirect(`/?res=${command}`);
};

export { sendCommand };
