'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </main>
  );
};

export default Error;
