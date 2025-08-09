import React from 'react'

const Button = ({ name, style, func }) => {
  return (
    <div
      onClick={func}
      className={` flex items-center justify-center p-6 cursor-pointer ${style} `}
    >
      {name}
    </div>
  );
};

export default Button