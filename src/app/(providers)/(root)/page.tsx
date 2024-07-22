import React from 'react';
import Link from 'next/link';

function Page() {
    return (
        <div>
            <div>메인페이지</div>
            <Link href="/surveypage">
                내 취향 코디 추천받기
            </Link>
        </div>
    );
}

export default Page;
