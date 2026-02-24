import type { Metadata, Viewport } from 'next'
import { Noto_Sans, Noto_Serif_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-noto-sans",
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-jp",
})

export const metadata: Metadata = {
  title: 'Japan Travel',
  description: 'Монгол аялагчдад зориулсан 7 өдрийн Япон аяллын хөтөлбөр - Токио, Фүжи, Шибуя, Одайба',
  icons: {
    icon:"/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: '#f0a0b8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn">
      <body className={`${notoSans.variable} ${notoSerifJP.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
