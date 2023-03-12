import type { AppProps } from 'next/app';
import 'styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="px-6 font-inter text-white xl:px-32">
      <Component {...pageProps} />
    </main>
  );
}
