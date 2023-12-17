import { Inconsolata } from 'next/font/google';

import { Header } from '@/components';

const font = Inconsolata({ subsets: ['latin'], weight: ['400', '700'] });
import './global.styles.css';

export const metadata = {
  title: 'AVT sensor controller app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
