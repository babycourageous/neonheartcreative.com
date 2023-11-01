import './globals.css'

import { Open_Sans, Roboto } from 'next/font/google'
import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'

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
      <body>
        <header className="w-full py-4">
          <div className="relative h-20">
            <Image
              src="/assets/images/nh-logo.png"
              alt=""
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </header>
        <main>{children}</main>
        <footer className="mx-auto mt-6 flex max-w-3xl items-center justify-center px-4 py-4">
          <div className="p-1">
            <a
              href="https://www.instagram.com/neonheartcreative/"
              target="_blank"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20,0H4A4,4,0,0,0,0,4V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"></path>
                <path d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"></path>
                <circle cx="18.5" cy="5.5" r="1.5"></circle>
              </svg>
            </a>
          </div>
          <div className="p-1">
            <a href="mailto:neonheartcreative@gmail.com" target="_blank">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
      C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
       M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
      L338.213,256L482,112.212V399.787z"
                />
              </svg>
            </a>
          </div>
        </footer>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
