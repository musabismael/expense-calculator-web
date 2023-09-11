import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "../components/Dashboard/Navbar";
import Footer from "../components/Dashboard/Footer";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Expense calculator',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}