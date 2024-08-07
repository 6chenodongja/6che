import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../assets/lottie/animation.json';

function LoadingScreen() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: 200, height: 200 }} // 여기서 width와 height 값을 조절하여 크기를 키울 수 있습니다.
      />
    </div>
  );
}

export default LoadingScreen;
