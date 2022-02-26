import React from 'react';

export default function ValidationErrors({ errors }) {
  return (
    Object.keys(errors).length > 0 && (
      <div className="mb-4">
        <div className="font-medium text-red-600">
          앗! 무언가 문제가 있습니다.
        </div>

        <ul className="mt-3 text-sm text-red-600 list-disc list-inside">
          {Object.keys(errors).map(function (key, index) {
            return <li key={index}>{errors[key]}</li>;
          })}
        </ul>
      </div>
    )
  );
}
