import { Poppins } from 'next/font/google';
import './globals.css';

import StyledComponentsRegistry from '@/lib/styled.lib';

import Header from '@/components/header/header.component';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'AVT sensor controller app',
  description: '',
  keywords: '',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={poppins.className}>
          <Header />
          <main className="container">{children}</main>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
};

export default RootLayout;
