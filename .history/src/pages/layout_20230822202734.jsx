import globals from './style/globals-pages.css'
 
export default function Layout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
    <>
      <main>{children}</main>
    </>
  )
}