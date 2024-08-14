'use client';

import { useRouter } from 'next/navigation';
import { useUserStore } from '@/zustand/store/useUserStore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogoutButton({ className }: { className?: string }) {
  const router = useRouter();
  const { clearUser } = useUserStore();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/email/logout', {
        method: 'POST',
      });
      if (response.ok) {
        clearUser();
        toast.success(
          <div className="toast-message">
            <span>로그아웃이 완료되었습니다!</span>
          </div>,
          {
            autoClose: 2500,
            icon: false,
            closeButton: false,
            className: 'custom-toast',
          },
        );
        console.log('@@', toast.success);
        setTimeout(() => {
          router.replace('/');
        }, 2500);
      } else {
        console.error('로그아웃에 실패하였습니다.');
        toast.error('로그아웃에 실패하였습니다. 다시 시도해주세요.', {
          position: 'bottom-center',
          autoClose: 2500,
          icon: false,
          closeButton: false,
          className: 'custom-toast',
        });
      }
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
      toast.error('로그아웃 중 오류가 발생했습니다.', {
        position: 'bottom-center',
        autoClose: 2500,
        icon: false,
        closeButton: false,
        className: 'custom-toast',
      });
    }
  };

  return (
    <>
      <button
        title="로그아웃 버튼"
        onClick={handleLogout}
        className={className}
      >
        로그아웃
      </button>
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="custom-toast"
      />
    </>
  );
}

export default LogoutButton;
