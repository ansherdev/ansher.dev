import { Inter, JetBrains_Mono } from '@next/font/google';
import type { AppProps } from 'next/app';
import 'styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jet-brains',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.variable} ${jetBrainsMono.variable} px-6 font-inter text-white xl:px-32`}
    >
      <Component {...pageProps} />
    </main>
  );
}
