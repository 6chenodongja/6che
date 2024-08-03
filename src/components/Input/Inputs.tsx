import { ComponentProps, useId } from 'react';

interface InputProps {
  labal?: string;
  required?: boolean;
} & ComponentProps<'input'>;

function Inputs({ labal, required, id, ...props }: InputProps) {
  const inputUId = useId();
  const inputId = id || inputUId;

  return (
    <div>
      <label htmlFor=""></label>
    </div>
  );
}

export default Inputs;
