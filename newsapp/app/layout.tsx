import Navbar from './components/Navbar'

export const metadata = {
  title: 'UpFront | Stay Updated',
  description: 'Stay updated on the News from your favirate Intrests',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar/>
      <body>
        {children}
      </body>
    </html>
  )
}
