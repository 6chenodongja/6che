'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useUserStore } from '@/zustand/store/useUserStore';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, clearUser } = useUserStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      if (response.ok) {
        clearUser();
        router.replace('/');
      } else {
        console.error('로그아웃에 실패하였습니다.');
      }
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center"
      >
        <Image
          src={user?.profileImage || '/default-profile.png'}
          alt="Profile"
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="ml-2">{user?.nickname}</span>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
