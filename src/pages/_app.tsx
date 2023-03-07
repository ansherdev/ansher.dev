import type { AppProps } from 'next/app';
import { inter, jetBrainsMono } from 'shared/fonts';
import 'styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.variable} ${jetBrainsMono.variable} px-6 font-inter text-white xl:px-32`}
    >
      <Component {...pageProps} />
    </main>
  );
}
