import { ComponentProps } from 'react';

type ButtonProps = {
  size?: '';
  color?: '';
} & ComponentProps<'button'>;

function Buttons() {
  return <button></button>;
}

export default Buttons;
