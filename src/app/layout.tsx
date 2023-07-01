import './global.css'

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
