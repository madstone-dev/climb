import { buttonColor } from '@/styles';
import { classNames } from '@/Utils/commons';
import React from 'react';

export default function Button({
  type = 'submit',
  className = '',
  processing,
  children,
}) {
  return (
    <button
      type={type}
      className={classNames(
        'w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium',
        className,
        buttonColor.solid,
        processing && 'opacity-25',
      )}
      disabled={processing}
    >
      {children}
    </button>
  );
}
