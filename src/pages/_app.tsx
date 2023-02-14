import type { AppProps } from 'next/app';
import { inter, jetBrainsMono } from 'shared/fonts';
import 'styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${jetBrainsMono.variable} font-inter`}>
      <Component {...pageProps} />
    </main>
  );
}
