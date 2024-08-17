'use client';
import Image from 'next/image';
import LoginForm from './LoginForm';
import { useState } from 'react';

function LoginPopup() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => setLogin(!login);
  return (
    <>
      <div className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full z-50 box-shadow">
        <div className="bg-white border rounded-3xl">
          <button title="x-icon">
            <Image
              src="x.svg"
              alt="close"
              className="hover:bg-black-200 hover:rounded-full "
              width={24}
              height={24}
            />
          </button>

          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginPopup;
