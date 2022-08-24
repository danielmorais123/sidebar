import React from 'react';

const MenuItem = (props) => {
  return (
    <div
      className="bg-gray-100 p-4 absolute rounded-lg w-32  transition ease-in-out delay-500 z-10"
      style={{ top: 50, right: !props.isNotification ? 10 : 25 }}
    >
      <ul className="flex flex-col justify-center items-center">
        <li>Hallow</li>
        <li>Hellow</li>
        <li>GiLLow</li>
      </ul>
    </div>
  );
};

export default MenuItem;
