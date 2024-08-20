// 'use client';

// import Image from 'next/image';
// import LoginForm from './LoginForm';

// type LoginPopupProps = {
//   show: boolean;
//   onClose: () => void;
// };

// function LoginPopup({ show, onClose }: LoginPopupProps) {
//   if (!show) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className=" flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full z-50 box-shadow">
//         <div className="bg-white shadow-md backdrop-blur-sm rounded-3xl w-full">
//           <button
//             title="x-icon"
//             className="absolute p-2 flex items-end justify-end"
//             onClick={onClose}
//           >
//             <Image
//               src="x.svg"
//               alt=""
//               className="hover:bg-black-200 hover:rounded-full"
//               width={24}
//               height={24}
//             />
//           </button>
//           <div className="flex justify-center w-[400px] mx-auto">
//             <LoginForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPopup;
