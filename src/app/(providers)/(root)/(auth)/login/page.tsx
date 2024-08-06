'use client';

import Header from 'app/(providers)/(components)/Header';
import LoginForm from './_components/LoginForm';
import Footer from 'app/(providers)/(components)/Footer';

function LoginPage() {
  return (
    <main className="flex flex-row justify-center container">
      <div className="bg-[#FAFAFA] w-full h-auto">
        <Header />
        <LoginForm />
        <Footer />
      </div>
    </main>
  );
}

export default LoginPage;
