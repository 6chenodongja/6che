import Link from 'next/link';
import React from 'react';

function SingUpDone() {
  return (
    <main>
      <h1>회원가입 완료</h1>
      <Link href={'/login'}>로그인 홈페이지로 이동</Link>
    </main>
  );
}

export default SingUpDone;
