'use client';

import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { sendCommand } from '@/actions/send-command.action';

import style from './dashboard.module.css';

const Dashboard = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const res = searchParams.get('res');

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('res');
    router.replace(`${pathname}?${params.toString()}`);
  }, []);

  useEffect(() => {
    console.log(res);
  }, [res]);

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
