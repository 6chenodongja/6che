'use client';

import LoginForm from './_components/LoginForm';

function LoginPage() {
  return (
    <main className="flex flex-col justify-between items-center w-full min-h-screen bg-neutral-50">
      <div className="flex-grow flex flex-col justify-center items-center w-[360px] h-full">
        <LoginForm />
      </div>
    </main>
  );
}

export default LoginPage;
