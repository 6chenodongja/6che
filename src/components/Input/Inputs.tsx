import { ComponentProps, useId } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
  required?: boolean;
}

function Inputs({ label, required, id, ...props }: InputProps) {
  const inputUId = useId();
  const inputId = id || inputUId;

  return (
    <div>
      {label && (
        <label htmlFor={inputId}>
          {label}
          {required && ' *'}
        </label>
      )}
      <input id={inputId} required={required} {...props} />
    </div>
  );
}

export default Inputs;
