import { SpaceScene } from 'components/welcome-section';
import type { AppProps } from 'next/app';
import 'styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpaceScene />
    </>
  );
}
