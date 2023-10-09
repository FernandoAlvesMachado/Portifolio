import './globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fernando Alves .Dev',
  description: 'Meu Portifólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={sora.className}>{children}</body>
    </html>
  )
}
