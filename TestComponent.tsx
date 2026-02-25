import React from 'react';

const TestComponent: React.FC = () => {
  const handleClick = () => {
    alert('Hello!');
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
};

export default TestComponent;
