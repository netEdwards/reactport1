import { Inter } from 'next/font/google'
import { Fira_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const fira_sans = Fira_Sans({ 
  subsets: ['latin'], 
  weight: ['400']
})

export const metadata = {
  title: 'sWeather',
  description: 'Online porfolio for Adrian Edwards',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira_sans.className}>
        {children}
        </body>
    </html>
  )
}
