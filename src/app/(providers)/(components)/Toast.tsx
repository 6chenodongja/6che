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
) => {
  toast[type](<div className="toast-message">{message}</div>, {
    className: 'custom-toast',
    icon: false,
    closeButton: false,
  });
};
