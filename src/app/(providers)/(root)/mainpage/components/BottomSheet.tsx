// BottomSheet.tsx

import React, { useState } from 'react';

interface BottomSheetProps {
  onClose: () => void;
  onSelect: (selectedElements: string[]) => void;
  selectedElements: string[];
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  onClose,
  onSelect,
  selectedElements,
}) => {
  const [selected, setSelected] = useState<string[]>(selectedElements);

  const toggleSelection = (element: string) => {
    if (selected.includes(element)) {
      setSelected(selected.filter((item) => item !== element));
    } else {
      setSelected([...selected, element]);
    }
  };

  const handleApply = () => {
    onSelect(selected);
    onClose();
  };

  const options = [
    '강수확률',
    '습도',
    '미세먼지',
    '자외선',
    '일출/일몰',
    '작년 기온',
    '풍속',
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end"
      onClick={onClose}
    >
      <div
        className="bg-white w-full md:w-1/2 lg:w-1/3 rounded-t-lg p-6"
        style={{ maxHeight: '80%', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-lg font-semibold mb-4">날씨 요소 추가</h2>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => toggleSelection(option)}
              className={`p-2 rounded-md border ${
                selected.includes(option)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleApply}
          className="mt-4 p-2 bg-blue-500 text-white rounded-md w-full"
        >
          적용
        </button>
      </div>
    </div>
  );
};

export default BottomSheet;
