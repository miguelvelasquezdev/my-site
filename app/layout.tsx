import './globals.css'

export const metadata = {
  title: 'Miguel Velásquez - Web Site',
  description: 'Miguel Velásquez Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-stone-800 text-white min-h-screen">{children}</body>
    </html>
  )
}
