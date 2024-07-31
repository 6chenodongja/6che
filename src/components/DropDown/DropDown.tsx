import { useRef, useState } from 'react';

function DropDown() {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState();
  return (
    <div>
      <button></button>
    </div>
  );
}

export default DropDown;
