'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/supabase/client';

const CallbackPage = () => {
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        const handleCallback = async () => {
            const { data, error } = await supabase.auth.getSessionFromUrl();

            if (error) {
                console.error('Error getting session from URL:', error.message);
            } else {
                router.push('/'); // 로그인 후 리다이렉트할 페이지
            }
        };

        handleCallback();
    }, [router, supabase]);

    return <div>Loading...</div>;
};

export default CallbackPage;
