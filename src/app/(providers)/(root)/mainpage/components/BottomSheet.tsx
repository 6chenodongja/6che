import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface BottomSheetProps {
  onClose: () => void;
  onSelectElements: (elements: string[]) => void;
  selectedElements: string[];
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  onClose,
  onSelectElements,
  selectedElements,
}) => {
  const [localSelectedElements, setLocalSelectedElements] =
    useState<string[]>(selectedElements);

  const handleElementToggle = (element: string) => {
    let updatedElements;
    if (localSelectedElements.includes(element)) {
      updatedElements = localSelectedElements.filter(
        (item) => item !== element,
      );
    } else {
      updatedElements = [...localSelectedElements, element];
    }
    setLocalSelectedElements(updatedElements);
    onSelectElements(updatedElements); // 선택되자마자 부모 컴포넌트에 적용
  };

  const weatherElements = [
    '강수확률',
    '습도',
    '미세먼지',
    '자외선',
    '일출/일몰',
    '작년 기온',
    '풍속',
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="bg-white w-[320px] rounded-t-2xl p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Handlebar */}
          <div className="flex justify-center">
            <div
              className="w-12 h-1.5 bg-gray-300 rounded-full mb-4 cursor-pointer"
              onClick={onClose}
            ></div>
          </div>
          <ul className="space-y-2">
            {weatherElements.map((element) => {
              const isSelected = localSelectedElements.includes(element);
              return (
                <li key={element}>
                  <label className="flex items-center p-2 border border-transparent rounded-md cursor-pointer ">
                    <div
                      onClick={() => handleElementToggle(element)}
                      className="h-5 w-5"
                    >
                      <Image
                        src={isSelected ? '/checkicon.svg' : '/checkbox.svg'}
                        alt="checkbox"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span
                      className="ml-3"
                      style={{ color: isSelected ? '#121212' : '#808080' }}
                    >
                      {element}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BottomSheet;
