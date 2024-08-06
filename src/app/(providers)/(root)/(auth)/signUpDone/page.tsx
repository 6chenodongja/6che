import React from 'react';
import SingUpDone from './_components/SingUpDone';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';

function SingUpDonePage() {
  return (
    <main className="flex flex-row justify-center container">
      <div className="bg-[#FAFAFA] w-full h-auto">
        <Header />
        <SingUpDone />
        <Footer />
      </div>
    </main>
  );
}

export default SingUpDonePage;
