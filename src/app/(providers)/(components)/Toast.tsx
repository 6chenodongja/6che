// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const ToastComponent = () => {
//   return (
//     <ToastContainer
//       position="bottom-center"
//       autoClose={2500}
//       hideProgressBar
//       newestOnTop
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       className="toast-container"
//       style={{
//         bottom: 'calc(400px + 50px)',
//         marginLeft: '5px',
//         marginRight: '5px',
//       }}
//     />
//   );
// };

// export const showToast = (
//   message: React.ReactNode,
//   type: 'success' | 'error',
// ) => {
//   toast[type](<div className="toast-message">{message}</div>, {
//     className: 'custom-toast',
//     icon: false,
//     closeButton: false,
//   });
// };

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastComponent = () => {
  return (
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
      className="toast-container"
      style={{
        bottom: 'calc(400px + 50px)',
        marginLeft: '5px',
        marginRight: '5px',
      }}
    />
  );
};

export const showToast = (
  message: React.ReactNode,
  type: 'success' | 'error',
  buttonLabel?: string, // 버튼 라벨
  onClickButton?: () => void, // 버튼 클릭 시 호출될 함수
) => {
  toast[type](
    <div className="toast-message">
      {message}
      {buttonLabel && onClickButton && (
        <button
          onClick={onClickButton}
          className="ml-4 text-[#4d4d4d] font-caption font-normal text-xs no-underline"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            marginLeft: '10px',
          }}
        >
          {buttonLabel}
        </button>
      )}
    </div>,
    {
      className: 'custom-toast',
      icon: false,
      closeButton: false,
    },
  );
};
