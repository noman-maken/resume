import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammad Noman Aslam Resume',
  description: 'I am an experienced web developer with a focus on backend development using core PHP. With over 4 years of experience, I specialize in creating robust and efficient server-side solutions. I have a deep understanding of core PHP and can effectively handle tasks such as database management, API integrations, and server-side scripting. I am skilled in developing dynamic and responsive websites, and I have the ability to convert various file formats into functional web components. I am currently seeking new opportunities to apply my backend development skills and contribute to the success of projects as a web developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
        {children}
        </body>
    </html>
  )
}
