import "./globals-pages.css";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Layout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
  );
}
