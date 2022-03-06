import React from 'react';

export default function ValidationError({ error }) {
  return <div className="mb-4 text-sm text-red-600">{error}</div>;
}
