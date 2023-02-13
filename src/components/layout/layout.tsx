import { PropsWithChildren } from 'react';
import { Footer } from './footer';
import { Header } from './header';

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className="pl-32 pr-32 text-white">{children}</div>;
};
