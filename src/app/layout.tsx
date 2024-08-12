import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import KakaoScript from './(providers)/(root)/common/KakaoScript';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '온코디',
  description: '날씨에 맞는 옷을 추천해주는 앱',
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="icon" href="/favicon.ico?v=1" />
      <body className={inter.className}>
        {children}
        <KakaoScript />
      </body>
    </html>
  );
}
