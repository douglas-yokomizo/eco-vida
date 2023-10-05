import './globals.css'
import type { Metadata } from 'next'
import { Karla } from 'next/font/google'

const karla = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eco Vida - Save lifes',
  description: 'Save the world consuming less CO2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={karla.className}>{children}</body>
    </html>
  )
}
