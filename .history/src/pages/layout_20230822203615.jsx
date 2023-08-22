import "./globals-pages.css";

import { Inter } from 'next/font/google'

export default function Layout({ children }) {
    const inter = Inter({ subsets: ['latin'] })

  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
  );
}
