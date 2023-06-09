import Footer from './components/Footer'
import './globals.css'


export const metadata = {
  title: 'UpFront | Stay curious',
  description: 'Keep up with the latest news',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
