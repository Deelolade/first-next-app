import { Roboto } from 'next/font/google';
import "./globals.css"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}