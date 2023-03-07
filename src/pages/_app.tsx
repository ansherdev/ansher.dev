import type { AppProps } from 'next/app';
import { inter, jetBrainsMono } from 'shared/fonts';
import 'styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.variable} ${jetBrainsMono.variable} pl-32 pr-32 font-inter text-white`}
    >
      <Component {...pageProps} />
    </main>
  );
}
