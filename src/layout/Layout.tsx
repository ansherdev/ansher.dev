import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return <main className="pl-32 pr-32">{children}</main>;
};
