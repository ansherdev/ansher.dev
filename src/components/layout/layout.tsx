import { PropsWithChildren } from 'react';
import { Footer } from './footer';
import { Header } from './header';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="pl-32 pr-32">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
