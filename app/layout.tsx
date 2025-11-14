import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 포토부스 개발 프로젝트',
  description: '재료와 제작방법 2 - 유재영',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-950 text-white">{children}</body>
    </html>
  )
}
