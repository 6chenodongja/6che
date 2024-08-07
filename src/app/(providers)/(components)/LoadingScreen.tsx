import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../assets/lottie/animation.json';

const LoadingScreen: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LoadingScreen;
