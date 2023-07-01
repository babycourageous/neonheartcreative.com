import './global.css'

import { Open_Sans, Roboto } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--open-sans',
})
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--roboto',
})

export const metadata = {
  title: 'Neon Heart Creative',
  description:
    'Neon Heart Creative is Jess Jones, an Atlanta based interior designer who specializes in design and decor for homes, office spaces, DIY projects, and events.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${roboto.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
