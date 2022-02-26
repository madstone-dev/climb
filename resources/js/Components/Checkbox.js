import React from 'react';

export default function Checkbox({ name, value, handleChange }) {
  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      className="border-gray-300 rounded shadow-sm text-neutral-600 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50"
      onChange={(e) => handleChange(e)}
    />
  );
}
