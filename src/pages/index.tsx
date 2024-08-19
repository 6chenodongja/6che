import MainPage from '../app/(providers)/(root)/mainpage/page';
import Footer from 'app/(providers)/(components)/Footer';
export default function Home() {
  return (
    <>
      <MainPage />
      <Footer /> {/* 푸터를 MainPage 아래에 추가 */}
    </>
  );
}
