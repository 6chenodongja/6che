'use client';

import React from 'react';
import ThermometerStyle from './ThermometerStyle';
import Header from 'app/(providers)/(components)/Header';
import Footer from 'app/(providers)/(components)/Footer';

function Page() {
  return (
    <div>
      <Header />
      <main>
        <ThermometerStyle />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
