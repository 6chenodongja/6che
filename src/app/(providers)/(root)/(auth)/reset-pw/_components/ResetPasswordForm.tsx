// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import { useRouter } from 'next/navigation';
// // // import { supabase } from '@/supabase/client';
// // // import { Toaster, toast } from 'react-hot-toast';

// // // const ResetPasswordForm = () => {
// // //   const [password, setPassword] = useState('');
// // //   const [confirmPassword, setConfirmPassword] = useState('');
// // //   const [token, setToken] = useState<string | null>(null);
// // //   const router = useRouter();

// // //   useEffect(() => {
// // //     const hash = window.location.hash;
// // //     const searchParams = new URLSearchParams(hash.replace('#', '?'));
// // //     const accessToken = searchParams.get('access_token');
// // //     if (accessToken) {
// // //       setToken(accessToken);
// // //     } else {
// // //       toast.error('유효하지 않은 토큰입니다.');
// // //       setTimeout(() => {
// // //         router.push('/');
// // //       }, 2000);
// // //     }
// // //   }, [router]);

// // //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
// // //     event.preventDefault();

// // //     if (password !== confirmPassword) {
// // //       toast.error('비밀번호가 일치하지 않습니다.');
// // //       return;
// // //     }

// // //     if (!token) {
// // //       toast.error('유효하지 않은 토큰입니다.');
// // //       return;
// // //     }

// // //     const { error } = await supabase.auth.updateUser({
// // //       access_token: token,
// // //       password: password,
// // //     });

// // //     if (error) {
// // //       console.error('비밀번호 업데이트 오류:', error);
// // //       toast.error('비밀번호 업데이트 중 오류가 발생했습니다.');
// // //     } else {
// // //       toast.success('비밀번호가 성공적으로 업데이트되었습니다.');
// // //       setTimeout(() => {
// // //         router.push('/login');
// // //       }, 2000);
// // //     }
// // //   };

// // //   return (
// // //     <div className="w-full max-w-[320px] mx-auto flex flex-col items-center min-h-[636px] bg-[#fafafa] mt-10 px-4">
// // //       <h2 className="text-2xl font-bold mb-[93px]">비밀번호 재설정</h2>
// // //       <form onSubmit={handleSubmit} className="w-full max-w-sm">
// // //         <div className="mb-4">
// // //           <label htmlFor="password" className="block text-gray-700">
// // //             비밀번호
// // //           </label>
// // //           <input
// // //             type="password"
// // //             id="password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             className="w-full px-3 py-2 border rounded-md"
// // //             required
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label htmlFor="confirmPassword" className="block text-gray-700">
// // //             비밀번호 확인
// // //           </label>
// // //           <input
// // //             type="password"
// // //             id="confirmPassword"
// // //             value={confirmPassword}
// // //             onChange={(e) => setConfirmPassword(e.target.value)}
// // //             className="w-full px-3 py-2 border rounded-md"
// // //             required
// // //           />
// // //         </div>
// // //         <button
// // //           type="submit"
// // //           className="w-full py-2 bg-black text-white rounded-md hover:bg-blue-400"
// // //         >
// // //           재설정
// // //         </button>
// // //       </form>
// // //       <Toaster position="bottom-center" reverseOrder={false} />
// // //     </div>
// // //   );
// // // };

// // // export default ResetPasswordForm;

// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { useRouter } from 'next/navigation';
// // import { supabase } from '@/supabase/client';
// // import { Toaster, toast } from 'react-hot-toast';

// // const ResetPasswordForm = () => {
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [token, setToken] = useState<string | null>(null);
// //   const [passwordError, setPasswordError] = useState('');
// //   const router = useRouter();

// //   useEffect(() => {
// //     const hash = window.location.hash;
// //     const searchParams = new URLSearchParams(hash.replace('#', '?'));
// //     const accessToken = searchParams.get('access_token');
// //     if (accessToken) {
// //       setToken(accessToken);
// //     } else {
// //       toast.error('유효하지 않은 토큰입니다.', { position: 'bottom-center' });
// //       router.push('/');
// //     }
// //   }, [router]);

// //   const validatePassword = (password: string) => {
// //     const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
// //     return regex.test(password);
// //   };

// //   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const newPassword = e.target.value;
// //     setPassword(newPassword);
// //     if (!validatePassword(newPassword)) {
// //       setPasswordError(
// //         '비밀번호는 8자 이상, 대문자 및 특수문자를 포함해야 합니다.',
// //       );
// //     } else {
// //       setPasswordError('');
// //     }
// //   };

// //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();

// //     if (password !== confirmPassword) {
// //       toast.error('비밀번호가 일치하지 않습니다.', {
// //         position: 'bottom-center',
// //       });
// //       return;
// //     }

// //     if (!validatePassword(password)) {
// //       setPasswordError(
// //         '비밀번호는 8자 이상, 대문자 및 특수문자를 포함해야 합니다.',
// //       );
// //       return;
// //     }

// //     if (!token) {
// //       toast.error('유효하지 않은 토큰입니다.', { position: 'bottom-center' });
// //       return;
// //     }

// //     const { error } = await supabase.auth.updateUser({
// //       access_token: token,
// //       password: password,
// //     });

// //     if (error) {
// //       console.error('비밀번호 업데이트 오류:', error);
// //       toast.error('비밀번호 업데이트 중 오류가 발생했습니다.', {
// //         position: 'bottom-center',
// //       });
// //     } else {
// //       toast.success('비밀번호가 성공적으로 업데이트되었습니다.', {
// //         position: 'bottom-center',
// //       });
// //       setTimeout(() => {
// //         router.push('/login');
// //       }, 2000);
// //     }
// //   };

// //   return (
// //     <div className="w-full max-w-md mx-auto flex flex-col items-center min-h-screen bg-[#fafafa] mt-10 px-4">
// //       <Toaster />
// //       <h2 className="text-2xl font-bold mb-[93px]">비밀번호 재설정</h2>
// //       <form onSubmit={handleSubmit} className="w-full max-w-sm">
// //         <div className="mb-4">
// //           <label htmlFor="password" className="block text-gray-700">
// //             비밀번호
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             value={password}
// //             onChange={handlePasswordChange}
// //             className="w-full px-3 py-2 border rounded-md"
// //             required
// //           />
// //           <p
// //             className={`text-sm ${passwordError ? 'text-red-500' : 'text-gray-500'}`}
// //           >
// //             비밀번호는 8자 이상, 대문자 및 특수문자를 포함해야 합니다.
// //           </p>
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="confirmPassword" className="block text-gray-700">
// //             비밀번호 확인
// //           </label>
// //           <input
// //             type="password"
// //             id="confirmPassword"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //             className="w-full px-3 py-2 border rounded-md"
// //             required
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="w-full py-2 bg-black text-white rounded-md hover:bg-blue-400"
// //         >
// //           재설정
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ResetPasswordForm;

// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { supabase } from '@/supabase/client';
// import { Toaster, toast } from 'react-hot-toast';

// const ResetPasswordForm = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [token, setToken] = useState<string | null>(null);
//   const [passwordError, setPasswordError] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     const hash = window.location.hash;
//     const searchParams = new URLSearchParams(hash.replace('#', '?'));
//     const accessToken = searchParams.get('access_token');
//     if (accessToken) {
//       setToken(accessToken);
//     } else {
//       toast.error('유효하지 않은 토큰입니다.', { position: 'bottom-center' });
//       setTimeout(() => {
//         router.push('/');
//       }, 2000);
//     }
//   }, [router]);

//   const validatePassword = (password: string) => {
//     const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
//     return regex.test(password);
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     if (!validatePassword(newPassword)) {
//       setPasswordError(
//         '비밀번호는 8자 이상, 대문자 및 특수문자를 포함해야 합니다.',
//       );
//     } else {
//       setPasswordError('');
//     }
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       toast.error('비밀번호가 일치하지 않습니다.', {
//         position: 'bottom-center',
//       });
//       return;
//     }

//     if (!validatePassword(password)) {
//       setPasswordError(
//         '비밀번호는 8자 이상, 대문자 및 특수문자를 포함해야 합니다.',
//       );
//       return;
//     }

//     if (!token) {
//       toast.error('유효하지 않은 토큰입니다.', { position: 'bottom-center' });
//       return;
//     }

//     const { error } = await supabase.auth.updateUser({
//       access_token: token,
//       password: password,
//     });

//     if (error) {
//       console.error('비밀번호 업데이트 오류:', error);
//       toast.error('비밀번호 업데이트 중 오류가 발생했습니다.', {
//         position: 'bottom-center',
//       });
//     } else {
//       toast.success('비밀번호가 성공적으로 업데이트되었습니다.', {
//         position: 'bottom-center',
//       });
//       setTimeout(() => {
//         router.push('/login');
//       }, 2000);
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto flex flex-col items-center min-h-screen bg-[#fafafa] mt-10 px-4">
//       <Toaster />
//       <h2 className="text-2xl font-bold mb-[93px]">비밀번호 재설정</h2>
//       <form onSubmit={handleSubmit} className="w-full max-w-sm">
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700">
//             비밀번호
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             className="w-full px-3 py-2 border rounded-md"
//             required
//           />
//           <p
//             className={`text-sm ${passwordError ? 'text-red-500' : 'text-gray-500'}`}
//           >
//             비밀번호는 8자 이상, 대문자 및 특수문자를 포함해야 합니다.
//           </p>
//         </div>
//         <div className="mb-[85.5px]">
//           <label htmlFor="confirmPassword" className="block text-gray-700">
//             비밀번호 확인
//           </label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 bg-black text-white rounded-md hover:bg-blue-400"
//         >
//           재설정
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ResetPasswordForm;

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/supabase/client';
import { Toaster, toast } from 'react-hot-toast';

const ResetPasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    const searchParams = new URLSearchParams(hash.replace('#', '?'));
    const accessToken = searchParams.get('access_token');
    if (accessToken) {
      setToken(accessToken);
    } else {
      toast.error('유효하지 않은 토큰입니다.', { position: 'bottom-center' });
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [router]);

  const validatePassword = (password: string) => {
    const isValid = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
      password,
    );
    setPasswordError(
      isValid
        ? ''
        : '비밀번호는 8자 이상, 대문자 및 특수문자를 포함해야 합니다.',
    );
    return isValid;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error('비밀번호가 일치하지 않습니다.', {
        position: 'bottom-center',
      });
      return;
    }

    if (!validatePassword(password)) {
      toast.error('비밀번호 조건에 맞지 않습니다.', {
        position: 'bottom-center',
      });
      return;
    }

    if (!token) {
      toast.error('유효하지 않은 토큰입니다.', { position: 'bottom-center' });
      return;
    }

    const { error } = await supabase.auth.updateUser({
      access_token: token,
      password: password,
    });

    if (error) {
      console.error('비밀번호 업데이트 오류:', error);
      toast.error('비밀번호 업데이트 중 오류가 발생했습니다.', {
        position: 'bottom-center',
      });
    } else {
      toast.success('비밀번호가 성공적으로 업데이트되었습니다.', {
        position: 'bottom-center',
      });
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  };

  return (
    <div className="w-full max-w-[320px] mx-auto flex flex-col items-center min-h-[636px] bg-[#fafafa] mt-10 px-4">
      <h2 className="text-2xl font-bold mb-[93px]">비밀번호 재설정</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={() => validatePassword(password)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <p
            className={`mt-1 text-sm ${passwordError ? 'text-red-500' : 'text-gray-600'}`}
          >
            특수문자, 대문자 포함 8자 이상
          </p>
        </div>
        <div className="mb-[85.5px]">
          <label htmlFor="confirmPassword" className="block text-gray-700">
            비밀번호 확인
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-black text-white rounded-md hover:bg-blue-400"
        >
          재설정
        </button>
      </form>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default ResetPasswordForm;
