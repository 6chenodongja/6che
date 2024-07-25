'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { createClient } from '@/supabase/client';
import Image from 'next/image';

interface Post {
    id: string;
    image_url: string;
}

const ResultPage: React.FC = () => {
    const [likes, setLikes] = useState(Array(4).fill(false));
    const [posts, setPosts] = useState<Post[]>([]);
    const searchParams = useSearchParams();
    const gender = searchParams ? searchParams.get('gender') : null;
    const style = searchParams ? searchParams.get('style') : null;
    const seasons = searchParams ? searchParams.get('seasons')?.split(',') || [] : [];
    const locations = searchParams ? searchParams.get('locations')?.split(',') || [] : [];

    useEffect(() => {
        if (gender && style && seasons.length > 0 && locations.length > 0) {
            fetchPosts(gender, style, seasons, locations);
        }
    }, [gender, style, seasons, locations]);

    const fetchPosts = async (gender: string, style: string, seasons: string[], locations: string[]) => {
        const supabase = createClient();

        const { data, error } = await supabase
            .from('posts')
            .select('id, image_url')
            .or(
                `gender.eq.${gender},style.eq.${style},seasons.in.(${seasons.join(',')}),locations.in.(${locations.join(',')})`
            )
            .limit(4);

        if (error) {
            console.error('Error fetching posts:', error);
        } else if (data && Array.isArray(data) && data.every(post => 'id' in post && 'image_url' in post)) {
            setPosts(data as Post[]);
        } else {
            console.error('Data format is incorrect:', data);
        }
    };

    const handleLikeClick = (index: number) => {
        const newLikes = [...likes];
        newLikes[index] = !newLikes[index];
        setLikes(newLikes);
    };

    return (
        <div className="w-80 mx-auto flex flex-col items-center justify-start h-screen bg-white p-4 relative gap-4 mt-20">
            <h1 className="text-xl font-medium text-left text-black w-full">내 코디 찾기</h1>
            <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
                {posts.map((post, index) => (
                    <div
                        key={post.id}
                        className="w-[140px] h-[190px] bg-gray-200 rounded-lg flex items-center justify-center relative"
                    >
                        <Image
                            src={post.image_url}
                            alt={`Post ${post.id}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <button
                            className="absolute bottom-2 right-2 text-xl"
                            onClick={() => handleLikeClick(index)}
                        >
                            {likes[index] ? '❤️' : '🤍'}
                        </button>
                    </div>
                ))}
            </div>
            <h2 className="h-20 text-lg font-medium text-center text-black w-full">결과</h2>
            <h3 className="text-sm text-left text-black">더 많은 코디를 보고싶다면</h3>
            <Link href="/list">
                <button className="w-72 h-[46px] rounded-lg bg-[#d9d9d9]">게시글 보러가기</button>
            </Link>
        </div>
    );
};

export default ResultPage;
