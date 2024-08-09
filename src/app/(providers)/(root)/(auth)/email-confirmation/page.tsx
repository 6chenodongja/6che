'use client';

import React from 'react';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';
import EmailConfirm from './_components/EmailConfirm';

function EmailConfirmPage() {
  return (
    <div className="container flex flex-col justify-between items-center w-full min-h-screen bg-neutral-50">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center w-full">
        <EmailConfirm />
      </main>
      <Footer />
    </div>
  );
}

export default EmailConfirmPage;
