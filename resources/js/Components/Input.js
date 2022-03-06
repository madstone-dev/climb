import { inputColor, selection } from '@/styles';
import { classNames } from '@/Utils/commons';
import React, { useEffect, useRef } from 'react';

export default function Input({
  type = 'text',
  name,
  value,
  className,
  autoComplete,
  required,
  isFocused,
  handleChange,
}) {
  const input = useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col items-start">
      <input
        type={type}
        name={name}
        value={value}
        className={classNames(
          'rounded-md',
          className,
          selection.primary,
          inputColor.outline,
        )}
        ref={input}
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
