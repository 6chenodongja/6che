'use client';

import LoginForm from './_components/LoginForm';

function LoginPage() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-50  pt-[80px] pb-[199px]">
      <div className="flex-grow flex justify-center items-center w-full">
        <LoginForm />
      </div>
    </main>
  );
}

export default LoginPage;
