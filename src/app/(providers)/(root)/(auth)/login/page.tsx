'use client';

import Header from 'app/(providers)/(components)/Header';
import LoginForm from './_components/LoginForm';
import Footer from 'app/(providers)/(components)/Footer';
import LoginPopup from './_components/LoginPopup';

function LoginPage() {
  return (
    <main className="container flex flex-col justify-between items-center w-full min-h-screen bg-neutral-50">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full h-full">
        <LoginForm />
      </div>
      <Footer />
    </main>
  );
}

export default LoginPage;
