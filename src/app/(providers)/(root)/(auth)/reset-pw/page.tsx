'use client';

import React from 'react';
import ResetPasswordForm from './_components/ResetPasswordForm';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';

function ResetPasswordPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <div className="hidden md:block w-full"></div>
      <main className="flex-grow flex justify-center items-center w-full md:mt-[46px] md:mb-[199px]">
        <ResetPasswordForm />
      </main>
      <div className="hidden md:block w-full"></div>
    </div>
  );
}

export default ResetPasswordPage;
