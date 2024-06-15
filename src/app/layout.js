import './globals.css'


import About from '../pages/about';

export const metadata = {
  title: 'Linh Nguyen Portfolio',
  description: 'Product Designer and FE Developer based in Toulon.',
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}