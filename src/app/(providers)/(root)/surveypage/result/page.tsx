'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { createClient } from '@/supabase/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTagStore } from '@/zustand/store/useTagStore';

interface Post {
    id: string;
    image_url: string;
}

const ResultPage: React.FC = () => {
    const [likes, setLikes] = useState(Array(4).fill(false));
    const [posts, setPosts] = useState<Post[]>([]);
    const { gender, style, seasons, locations } = useTagStore();
    const router = useRouter();

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

    const handleBackClick = () => {
        router.back();
    };

    return (
        <div className="w-80 mx-auto flex flex-col items-center justify-start h-screen bg-white p-4 relative gap-4 mt-20">
            <div className="flex items-center w-full absolute top-0 left-4">
                <button onClick={handleBackClick} className="text-xl font-medium text-black">
                    ᐸ
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4 mt-20">
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
            <h2 className="text-sm text-left text-[#121212]" style={{marginTop:'40px'}}>더 많은 코디를 보고싶다면</h2>
            <Link href="/list">
                <button className="w-72 h-[46px] rounded-lg bg-[#121212] text-white">게시글 보러가기</button>
            </Link>
        </div>
    );
};

export default ResultPage;
