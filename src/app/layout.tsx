import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import KakaoScript from './(providers)/(root)/common/KakaoScript';
import Header from './(providers)/(components)/Header';
import Footer from './(providers)/(components)/Footer';

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
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Header 컴포넌트를 최상단에 위치 */}
        <Header />

        {/* Main content (children) */}
        <main className="flex-grow">{children}</main>

        {/* Footer 컴포넌트를 최하단에 위치 */}
        <Footer />

        {/* 카카오 스크립트 */}
        <KakaoScript />
      </body>
    </html>
  );
}
