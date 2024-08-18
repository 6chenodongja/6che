'use client';

import Image from 'next/image';
import BottomSheet from './BottomSheet';

type LoginPopupProps = {
  show: boolean;
  onClose: () => void;
};

function BottomSheetPopup({ show, onClose }: LoginPopupProps) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className=" flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full z-50 box-shadow">
        <div className="bg-white rounded-3xl w-[480px]">
          <div className="flex justify-center w-[400px] mx-auto">
            <BottomSheet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSheetPopup;
