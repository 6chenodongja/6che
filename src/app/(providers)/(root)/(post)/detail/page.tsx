'use client';
import { createClient } from '@/supabase/client';
import Link from 'next/link';
import React, { useState } from 'react';

function PostDetail() {
    const supabase = createClient();
    //임시 등록
    const [post, setPost] = useState([]);

    return (
        <div>
            <div className="max-w-sm mx-auto h-auto m-10 bg-pink-400">
                <Link href={'/list'}>등록하기</Link>
            </div>
        </div>
    );
}

export default PostDetail;
