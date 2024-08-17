import Image from 'next/image';
import { useState } from 'react';

interface DropdownProps {
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
}

function CustomDropdownProps(props: DropdownProps) {
  const { options, selected, setSelected } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div>
      <button type="button" onClick={handleToggle}>
        <span>{selected || ''}</span>
        <Image
          src={
            isOpen
              ? '/images/icons/arrow_down.svg'
              : '/images/icons/arrow_up.svg'
          }
          alt=""
          width={24}
          height={24}
        />
      </button>
      {isOpen && (
        <div>
          {options.map((option, index) => (
            <div key={index} onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomDropdownProps;
